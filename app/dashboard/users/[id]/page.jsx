import style from "../../../ui/dashboard/user/singeUser/singeUser.module.css";
import Image from "next/image";

const SingeUserPage = () => {
  return (
    <div className={style.container}>
      <div className={style.inforContainer}>
        <div className={style.imgContainer}>
          <Image src="/noavatar.png" alt="" fill></Image>
        </div>
        thinh
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="do thinh" name="username" />

          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" name="Email" />

          <label htmlFor="">Password</label>
          <input type="password" placeholder="do thinh" name="Password" />

          <label htmlFor="">Phone</label>
          <input type="text" placeholder="Phone" name="phone" />

          <label htmlFor="">is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="">is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingeUserPage;
