import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import style from '../ui/dashboard/dashboard.module.css'
import Footer from "../ui/dashboard/footer/footer"

const Layout =({children}) =>{
    return (
        <div className={style.container}>
            <div className={style.menu}>
                <Sidebar></Sidebar>
            </div>
            <div className={style.content}>
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Layout