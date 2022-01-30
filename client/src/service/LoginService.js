

import {gatewayInstance} from "../interceptors/request";

export const  alperen = (email, password) => {
     gatewayInstance.post('/login',{password: password, email: email}).then(res => {
        localStorage.setItem('token', res.data.token)
        window.location.href = "/"
    })
}   