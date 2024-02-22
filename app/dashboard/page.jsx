import Card from '../ui/dashboard/card/card'
import Chart from '../ui/dashboard/chart/chart'
import style from '../ui/dashboard/dashboard.module.css'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'

const DashboardPage =() =>{

    return (
        <div className={style.wraper}>
            <div className={style.main}>
                <div className={style.card}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <Transactions></Transactions>
                <Chart></Chart>
            </div>
            <div className={style.side}>
                <Rightbar></Rightbar>
            </div>
        </div>
    )
}

export default DashboardPage