import { MdSupervisedUserCircle } from "react-icons/md";
import style from "./card.module.css";

const Card = () => {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={style.texts}>
        <span className={style.title}>Total Users</span>
        <span className={style.number}>2000</span>
        <span className={style.detail}>
          <span className={style.positive}>12%</span>trên tổng tiền
        </span>
      </div>
    </div>
  );
};
export default Card;
