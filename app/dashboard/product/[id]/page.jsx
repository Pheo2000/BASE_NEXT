import { productFetchSinge } from "@/app/lib/data";
import style from "../../../ui/dashboard/product/singeProduct/singeProduct.module.css";
import Image from "next/image";
import { updateProduct } from "@/app/lib/actions";

const SingeProductPage =  async({params}) => {
  const {id} = params 
  const product = await productFetchSinge(id)
  console.log("product", product)
  return (
    <div className={style.container}>
      <div className={style.inforContainer}>
        <div className={style.imgContainer}>
          <Image src="/noavatar.png" alt="" fill></Image>
        </div>
        {product.title}
      </div>
      <div className={style.formContainer}>
        <form action={updateProduct} className={style.form}>
          <input type="hidden" name="id" defaultValue={product.id} />
          <label htmlFor="">Title</label>
          <input type="text" placeholder="title" name="title"  defaultValue={product.title}/>

          <label htmlFor="">Price</label>
          <input type="number" placeholder="Price" name="Price" defaultValue={product.price}  />

          <label htmlFor="">Stock</label>
          <input type="number" placeholder="stock" name="stock" defaultValue={product.stock}/>

          <label htmlFor="">Color</label>
          <input type="text" placeholder="color" name="red" defaultValue={product.color}/>

          <label htmlFor="">Size</label>
          <input type="text" placeholder="color" name="size" defaultValue={product.size}/>

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
