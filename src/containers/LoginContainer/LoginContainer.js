import React, { useState } from 'react';
import LoginComponent from "../../components/LoginComponent";

const LoginContainer = () => {
    const [password, handleChangePassword] = useState("");
    return (
        <LoginComponent 
            password={password}
            handleChangePassword={handleChangePassword}
        />
    )
};

export default LoginContainer;