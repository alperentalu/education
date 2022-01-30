import React from 'react';
import {gatewayInstance} from "../interceptors/request"
   
export default function Login() {
  function login ()  {
    gatewayInstance.post('/login',{password: "bowie", email: "db@ssfr.fr"}).then(res => {
        console.log(res.data.token)
    })
}
  return <div>
      <h2>
        <button onClick={login}>Click ME</button>
      </h2>
  </div>;
}
