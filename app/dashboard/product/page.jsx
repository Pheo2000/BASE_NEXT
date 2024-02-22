import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Panigation from "@/app/ui/dashboard/panigation/panigation";
import style from "../../ui/dashboard/product/product.module.css";
import { userProduct } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const ProductPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await userProduct(q, page);

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
            <td>Color</td>
            <td>Size</td>
            {/* <td>Created</td> */}
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>
                <div className={style.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={style.productImage}
                  ></Image>
                  {prod.title}
                </div>
              </td>
              <td>{prod.desc}</td>
              <td>{prod.price}</td>
              <td>{prod.color}</td>
              <td>{prod.size}</td>
              {/* <td>{prod.createAt}</td> */}
              <td>{prod.stock}</td>
              <td>
                <div className={style.buttons}>
                  <Link href={`/dashboard/product/${prod.id}`}>
                    <button className={`${style.button} ${style.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" defaultValue={prod.id} />
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

export default ProductPage;
