
import React from 'react';
import Education from './main/Education';


function App() {
  return <div>
    <Education isLogin={localStorage.getItem('token') ? true : false}/>
  </div>;
}
export default  App