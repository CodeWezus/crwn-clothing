import React from "react";
import Login from '../../Components/login/login';
import SignUp from '../../sign-up/sign-up';

import './user-login.scss'

const UserLoginPage = () => (
    <div className='user-login'>
        <Login/>
        <SignUp/>
    </div>
    
);

export default UserLoginPage;