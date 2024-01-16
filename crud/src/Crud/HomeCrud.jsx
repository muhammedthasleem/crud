import { Link } from "react-router-dom"
import style from "./homeCrud.module.css"
const HomeCrud=()=>{
    return(
        <div>
            <section id={style.nav}>
                <Link to="/createUser">CREATE-USER</Link>
                <Link to="/users">USERS</Link>
            </section>
        </div>
    )
}
export default HomeCrud