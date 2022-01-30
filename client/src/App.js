
import React from 'react';
import {gatewayInstance} from "./interceptors/request"
import {menuRouter, selectedMenu} from "./routes/Router"
import {MenuItem, ListItemText} from "@mui/material"
import NavigationService from "./service/constants/NavigationService"
import Education from './main/Education';

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
//   window.location.href = "/login"
// }

// const renderRoute = () => {
//   return menuRouter.map(item => {
//     return <MenuItem  onClick={() => {menuClick(item)}}  key={"menu-item"+item.id}>
//       <ListItemText>{item.name}</ListItemText>
//     </MenuItem>
//   })
// }
function App() {
  return <div>
    <Education/>
  </div>;
}
export default  App