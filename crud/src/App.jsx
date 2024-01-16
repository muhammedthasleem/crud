import { BrowserRouter, Route, Routes } from "react-router-dom"

import CreateUser from "./Crud/CreateUser"
import Delete from "./Crud/Delete"
import EditUsers from "./Crud/EditUsers"
import HomeCrud from "./Crud/HomeCrud"
import Users from "./Crud/Users"


const App=()=>{
    return(
        <div>
            {/* <BrowserRouter>
            <FindCoder/>
            <Routes>
                <Route element={<Explore/>} path="/abc1"/>
                <Route element={<Explore/>} path="/abc1"/>
                <Route element={<Explore/>} path="/abc1"/>
                <Route element={<Explore/>} path="/abc1"/>
            </Routes>
            </BrowserRouter> */}

{/* /////////////////////////////////////////////////////// FIND-CODER ///////////////////////////////////////////////////////////////////////////// */}

            <BrowserRouter>
            <HomeCrud/>
            <Routes>
                <Route element={<CreateUser/>} path="/createUser"/>
                <Route element={<Users/>} path="/users"/>
                <Route element={<EditUsers/>} path="/edit/:abc"/>
                <Route element={<Delete/>} path="/delete"/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App 