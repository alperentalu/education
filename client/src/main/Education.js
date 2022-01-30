
import React from 'react';
import {gatewayInstance} from "../interceptors/request"
import {menuRouter, selectedMenu} from "../routes/Router"
import {MenuItem, ListItemText} from "@mui/material"
import NavigationService from "../service/constants/NavigationService"
import {observer} from "mobx-react"
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

// const alp = () => {
//   // axios.get("http://localhost:5000/api/user").then((res) => {
//   //   console.log(res.data.token)
//   // })
//   gatewayInstance.post(`/api/register`,{ name: "david",
//   password: "bowie",
//   email: "db@ssfr.fr"
// })
// }
// const menuClick = (item) => {
//     window.location.href="/login"
// }

function RenderRoute () {
  return    <BrowserRouter>
                 <Routes> 
                     {menuRouter.map(item => { 
                         return <Route key={"menu-item"+item.id} path={item.url} element={item.page} />
                        })
                    }    
                 </Routes>
            </BrowserRouter>
}
function Education() {
    const route = "/login";
    return   <div>
        <RenderRoute/>
    </div>
}
export default  Education