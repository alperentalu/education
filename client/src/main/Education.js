
import React from 'react';
import RenderRoute from '../service/configuration/route';
import Login from "../views/Login"

function Education(props) {
    const {isLogin} = props
    return   <div>
        <div>
        <RenderRoute isLogin={isLogin}/>
        </div>
    </div>
}
export default  Education