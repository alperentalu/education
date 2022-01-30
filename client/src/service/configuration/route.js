import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from '../../components/Navbar';

import {menuRouter} from "../../routes/Router"
export default function RenderRoute () {
    return    <BrowserRouter>
                 <Navbar/>
                   <Routes> 
                       {menuRouter.map(item => { 
                           return <Route key={"menu-item"+item.id} path={item.url} element={item.page} />
                          })
                      }    
                   </Routes>
              </BrowserRouter>
  }