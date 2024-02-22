import style from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Lates Transations</h1>
      <table className={style.table}>
        <thead className={style.th}>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.user}>
              <Image src="/noavatar.png" alt="" width="40" height="40" className={style.userImage}></Image>
                Xuân Thịnh
            </td>
            <td className={`${style.pending} ${style.status}`}>Pending</td>
            <td>17.12.2000</td>
            <td>$5000</td>
          </tr>

          <tr>
            <td className={style.user}>
              <Image src="/noavatar.png" alt="" width="40" height="40" className={style.userImage}></Image>
                Xuân Thịnh
            </td>
            <td className={`${style.done} ${style.status}`}>Pending</td>
            <td>17.12.2000</td>
            <td>$5000</td>
          </tr>

          <tr>
            <td className={style.user}>
              <Image src="/noavatar.png" alt="" width="40" height="40" className={style.userImage}></Image>
                Xuân Thịnh
            </td>
            <td className={`${style.canceled} ${style.status}`}>Pending</td>
            <td>17.12.2000</td>
            <td>$5000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Transactions;
