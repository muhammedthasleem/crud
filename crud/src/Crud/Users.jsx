import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import style from "./homeCrud.module.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Users=()=>{
    let [users,setUsers]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch(()=>{
            console.log("ERROR");
        })

    },[])

    let deleteData=(x)=>{
        axios.delete(`http://localhost:3000/users/${x}`)
        window.location.assign('/users')
        // window.location.reload("/users")
    }

    return(
        <div id={style.userPage}>
            
            {users.map((x)=>{
                return(
                    <div id={style.tableform}>
                        <table>
                            <tr><th colSpan='2'>User{x.id}</th></tr>
                            <tr><td>Name</td><td>:{x.name}</td></tr>
                            <tr><td>Salary</td><td>:{x.salary}</td></tr>
                            <tr><td>Company</td><td>:{x.company}</td></tr>
                            <tr>
  <td>
    <button className={`${style.bEdit} ${style.editButton}`}>
      <Link to={`/edit/${x.id}`}>Edit</Link>
    </button>
  </td>
  <td>
    <button className={`${style.bEdit} ${style.deleteButton}`} onClick={() => { deleteData(x.id) }}>
      <Link to="">Delete</Link>
    </button>
  </td>
</tr>

                        
                        </table>
                    </div>
                )
            })}            
        </div>
    )
}
export default Users