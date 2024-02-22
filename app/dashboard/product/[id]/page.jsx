import style from "../../../ui/dashboard/product/singeProduct/singeProduct.module.css";
import Image from "next/image";

const SingeProductPage = () => {
  return (
    <div className={style.container}>
      <div className={style.inforContainer}>
        <div className={style.imgContainer}>
          <Image src="/noavatar.png" alt="" fill></Image>
        </div>
        Iphone
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <label htmlFor="">Title</label>
          <input type="text" placeholder="title" name="title" />

          <label htmlFor="">Price</label>
          <input type="number" placeholder="Price" name="Price" />

          <label htmlFor="">Stock</label>
          <input type="number" placeholder="stock" name="stock" />

          <label htmlFor="">Color</label>
          <input type="text" placeholder="color" name="red" />

          <label htmlFor="">Size</label>
          <input type="text" placeholder="color" name="size" />

          <label htmlFor="">Cat</label>
          <select name="cat" id="cat">
            <option value={"kitchen"}>Kitchen</option>
            <option value={"computers"}>Computers</option>
          </select>

          <label htmlFor="">Descriptions</label>
          <textarea name="desc" id="desc" placeholder="descriptions"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingeProductPage;
