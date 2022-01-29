
import React from 'react';
import axios from "axios"
function alp  () {
  axios.post("http://localhost:5000/login",{ name: "david",
    password: "bowie",
    email: "db@ssfr.fr"
  }).then((res) => {
    console.log(res.data.token)
  })
}
function App() {
  return <div>
    <button onClick={alp}>click me</button>
  </div>;
}
export default App