import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Panigation from "@/app/ui/dashboard/panigation/panigation";
import style from '../../ui/dashboard/product/product.module.css'

const ProductPage = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder={"Search for a product"}></Search>
        <Link href={"/dashboard/product/add"}>
          <button className={style.addButton}>Add New</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={style.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={style.productImage}
                ></Image>
                Iphone
              </div>
            </td>
            <td>dinhthinh1712@gmail.com</td>
            <td>17-12-2000</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={style.buttons}>
                <Link href={"/dashboard/product/test"}>
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

export default ProductPage;
