
import React from 'react';
import RenderRoute from '../service/configuration/route';
import Login from "../views/Login"

function Education(props) {
    const {isLogin} = props
    return   <div>
        <div>
        {isLogin ? <RenderRoute/> : <Login/>}
        </div>
    </div>
}
export default  Education