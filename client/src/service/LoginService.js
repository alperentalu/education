

import {gatewayInstance} from "../interceptors/request";
import { Navigate } from "react-router-dom"; 

export const  getLoginReq = (email, password) => {
     gatewayInstance.post('/login',{password: password, email: email}).then(res => {
        localStorage.setItem('token', res.data.token)
        window.location.href = "/"
    })
}   