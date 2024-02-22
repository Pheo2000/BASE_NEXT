import Search from "@/app/ui/dashboard/search/search";
import style from "../../ui/dashboard/user/user.module.css";
import Link from "next/link";
import Image from "next/image";
import Panigation from "@/app/ui/dashboard/panigation/panigation";
import { userFetch } from "@/app/lib/data";

const Userpage = async () => {
  // const users = await userFetch();
  // console.log("users", users);
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
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={style.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={style.userImage}
                ></Image>
                Do Thinh
              </div>
            </td>
            <td>dinhthinh1712@gmail.com</td>
            <td>17-12-2000</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={style.buttons}>
                <Link href={"/dashboard/users/test"}>
                  <button className={`${style.button} ${style.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${style.button} ${style.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Panigation></Panigation>
    </div>
  );
};

export default Userpage;
