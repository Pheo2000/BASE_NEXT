import { userFetchSinge } from "@/app/lib/data";
import style from "../../../ui/dashboard/user/singeUser/singeUser.module.css";
import Image from "next/image";
import { updateUser } from "@/app/lib/actions";

const SingeUserPage = async ({params}) => {
  const {id} = params 
  const user = await userFetchSinge(id)
  return (
    <div className={style.container}>
      <div className={style.inforContainer}>
        <div className={style.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill></Image>
        </div>
        {user.username}
      </div>
      <div className={style.formContainer}>
        <form action={updateUser} className={style.form}>
          <input type="hidden" name ="id" value={user.id} />
          <label htmlFor="">Username</label>
          <input type="text" placeholder="do thinh" name="username"  defaultValue={user.username}/>

          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" name="email" defaultValue={user.email}  />

          <label htmlFor="">Password</label>
          <input type="password" placeholder="do thinh" name="password"  defaultValue ={user.password}/>

      
          <label htmlFor="">Address</label>
          <input type="text" placeholder="address" name="address"  defaultValue={user.address}/>

          <label htmlFor="">Phone</label>
          <input type="text" placeholder="Phone" name="phone"  defaultValue={user.phone}/>

          <label htmlFor="">is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>

          <label htmlFor="">is Active</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingeUserPage;
