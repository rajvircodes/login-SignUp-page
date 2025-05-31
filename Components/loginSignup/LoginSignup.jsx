import React, { useState } from 'react';
import './LoginSignup.css'
import user_icon from '../Assets/avatar.png'
import user_email from '../Assets/enter.png'
import user_password from '../Assets/key.png'


const LoginSignup = () => {

    const [action,setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
                <div className="inputs">
                    {action === "Login"?<div></div>:<div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name'/>
                    </div>}
                    
                    <div className="input">
                        <img src={user_email} alt="" />
                        <input type="email" placeholder='Email id'/>
                    </div>
                    <div className="input">
                        <img src={user_password} alt="" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                {action === "Sign up"?<div></div>:<div className="forgot-passwprd">Lost passwprd? <span>Click Here!</span></div>}
                
                <div className="submit-container">
                    <div className={action === "Login"?"submit gray":"submit"}onClick= {()=>{setAction("Sign up")}}>Sign up</div>
                    <div className={action === "Sign up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
