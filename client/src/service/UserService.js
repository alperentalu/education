// import {action} from "mobx"
// import {gatewayInstance} from "../interceptors/request"
// import React from 'react';

// export default function UserService() {
//     function login ()  {
//         gatewayInstance.post('/login',{password: "bowie", email: "db@ssfr.fr"}).then(res => {
//             console.log(res)
//         })
//     }
// }






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