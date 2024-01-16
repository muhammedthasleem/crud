import style from "./homeCrud.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const EditUsers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let{abc}=useParams()
        console.log(abc);

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${abc}`)
        .then((resp)=>{
            // console.log(resp.data);
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
        .catch(()=>{
            console.log("Error");
        })
    },[])

    let navigate=useNavigate()

    let nameData=(a)=>{setName(a.target.value)}
    let salaryData=(a)=>{setSalary(a.target.value)}
    let companyData=(a)=>{setCompany(a.target.value)}

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/users/${abc}`,payload)
        .then((x)=>{
            console.log("Data has been stored");
        })
        .catch(()=>{
            console.log("ERROR");
        })
        navigate("/users")
        alert("Data Submitted")

    }
    
    return(
        <div  id={style.myForm}>
            <form>
                <h1>Update User</h1><br /><br />
                <label>NAME</label><br />
                <input type="text" value={name} onChange={nameData}/><br />
                <label>SALARY</label><br />
                <input type="text" value={salary} onChange={salaryData}/><br />
                <label>COMPANY</label><br />
                <input type="text" value={company} onChange={companyData}/><br />
                <button onClick={formHandle}>SUBMIT</button>
            </form>
        </div>
    )
}
export default EditUsers