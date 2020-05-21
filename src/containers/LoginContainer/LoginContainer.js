import React, { useEffect, useState } from 'react';
import LoginComponent from "../../components/LoginComponent";

const LoginContainer = () => {
    const [password, handleChangePassword] = useState("");
    const [isShowing, setIsShowing] = useState(true);

    useEffect(() => {
        if (password === "yes") {
            setTimeout(() => {
                setIsShowing(false);
            }, 1000);
        }
    }, [password]);

    return (
        <LoginComponent 
            password={password}
            isShowing={isShowing}
            handleChangePassword={handleChangePassword}
        />
    )
};

export default LoginContainer;