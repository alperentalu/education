import React from 'react';
import {Routes, Route, BrowserRouter,Navigate,useLocation} from "react-router-dom";
import Navbar from '../../components/Navbar';

import {menuRouter} from "../../routes/Router"
export default function RenderRoute () {
    const isLogin = localStorage.getItem('token') ? true : false ;
    function RequireAuth({ children }) {
        let location = useLocation();
        console.log(location)
        if (!isLogin) {
          return <Navigate to="/login" state={{ from: location }} replace />;
        }
      
        return children;
      }
    return    <BrowserRouter>
                {isLogin && <Navbar/> }
                   <Routes> 
                       {menuRouter.map(item => { 
                           return  <Route exact  key={"menu-item"+item.id} path={item.url} element={ item.name !== "Login" && item.name !== 'Register'  ?  <RequireAuth>{item.page}</RequireAuth> : item.page} />
                          //  
                          })
                      }    
                   </Routes>
              </BrowserRouter>
}


