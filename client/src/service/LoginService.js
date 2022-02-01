

import {gatewayInstance} from "../interceptors/request";

export const  getLoginReq =  (email, password) => {
     gatewayInstance.post('/login',{password: password, email: email}).then(res => {
        if(res.status === 200){
            localStorage.setItem('token', res.data.token)
            window.location.href = "/"
        }else {
           return true
        }
    })
}   