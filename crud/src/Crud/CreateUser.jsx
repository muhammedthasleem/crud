import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./homeCrud.module.css"

const CreateUser=()=>{
    let [name, setName]=useState("")
    let [salary, setSalary]=useState("")
    let [company, setCompany]=useState("")

    let navigate=useNavigate()

    let nameData=(x)=>{
        setName(x.target.value)
    }
    let salaryData=(y)=>{
        setSalary(y.target.value)
    }
    let companyData=(z)=>{
        setCompany(z.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
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
export default CreateUser