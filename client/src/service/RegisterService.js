import axios from "axios"

export const  getRegisterReq =  (userName, email, password) => {
    const form = JSON.stringify({username: userName, email: email, password: password})
     axios.post('http://localhost:5000/api/register',form,{headers: {'content-type': 'application/json'}}).then(res => {
       if(res.status === 200) {
           window.location.href = "/login";
           return true
       }else {
           return false
       }

    })
    console.log(form);
}   