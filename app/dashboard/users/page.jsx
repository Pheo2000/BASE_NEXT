import Search from "@/app/ui/dashboard/search/search";
import style from "../../ui/dashboard/user/user.module.css";
import Link from "next/link";
import Image from "next/image";
import Panigation from "@/app/ui/dashboard/panigation/panigation";
import { userFetch } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";

const Userpage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { users, count } = await userFetch(q, page);
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder={"Search for a users"}></Search>
        <Link href={"/dashboard/users/add"}>
          <button className={style.addButton}>Add New</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td>
                <div className={style.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={style.userImage}
                  ></Image>
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "client"}</td>
              <td>{user.isActive ? "Active" : " passive"}</td>
              <td>
                <div className={style.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${style.button} ${style.view}`}>
                      View
                    </button>
                  </Link>

                  <form action={deleteUser}>
                    <input type="hidden" name="id" defaultValue={user.id} />
                    <button className={`${style.button} ${style.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Panigation count={count}></Panigation>
    </div>
  );
};

export default Userpage;
