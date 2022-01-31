import {gatewayInstance} from "../interceptors/request";

export const  getRegisterReq =  (userName, email, password) => {
     gatewayInstance.get('/api/register',{userName: userName , password: password, email: email}).then(res => {
       
        console.log(res)

        // if(res.status === 200){
            
            //  localStorage.setItem('token', res.data.token)
            //  window.location.href = "/"
        // }else {
        //    return true
        // }
    })
}   