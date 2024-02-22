import MenuLink from "./menuink/menuLink";
import style from "./sidebar.module.css";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/product",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.user}>
        <Image className={style.userImage} src="/noavatar.png" alt="" width={50} height={50}></Image>
        <div className={style.userDetail}>
          <span className={style.userName}>ĐỖ ĐÌNH THỊNH</span>
          <span className={style.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={style.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={style.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title}></MenuLink>
            ))}
          </li>
        ))}
      </ul>
        <button className={style.logout}>
            <MdLogout></MdLogout>
            Logout
        </button>
    </div>
  );
};

export default Sidebar;
