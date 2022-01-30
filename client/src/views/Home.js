import React from 'react';
import {getUser} from "../service/HomeService"
export default function Home() {
  const getUsers = () => {
    console.log("çalıştı")
    getUser();
  }
  return <div>
     <button onClick={getUsers}>Click Me</button>
  </div>;
}

// export default Home;
