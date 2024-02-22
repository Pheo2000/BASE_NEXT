
import style from './panigation.module.css'
const Panigation =()=>{
    return(
        <div className={style.container}>
            <button className={style.button} disabled>Prev</button>
            <button className={style.button}>Next</button>
        </div>
    )
}

export default Panigation