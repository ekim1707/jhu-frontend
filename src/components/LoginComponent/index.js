import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../common/Icon";
import Input from "../../common/InputField";

const LoginComponent = ({
    password,
    handleChangePassword
}) => {
    return (
        <div className="loginComponent">
            <div className="loginComponentLeft">
                <div className="loginComponentLeftRow"></div>
                <div className="loginComponentLeftRowMiddle">
                    <div className="rowRectangle"></div>
                    <div className="rowHalfSquare"></div>
                </div>
                <div className="loginComponentLeftRow"></div>
            </div>
            <div className="loginComponentRight">
                <div className="loginComponentRightRow"></div>
                <div className="loginComponentRightRowMiddle">
                    <div className="rowHalfSquare">
                        <div className="inputLoginContainer">
                            <div className="iconContainer">
                                <Icon className="lockIcon" iconName="lock" />
                            </div>
                            <div className="inputContainer">
                                <Input 
                                    id="password"
                                    className="loginPasswordInput"
                                    onChange={(e) => handleChangePassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    disabled={password === "yes" ? true : false}
                                    style={password === "yes" ? { borderBottom : "2px solid #60a630" } : {}}
                                />
                                {password !== "yes" && (
                                    <label className="passwordLabel">{content.PASSWORD_LABEL}</label> 
                                )}
                                {password === "yes" && (
                                    <label className="welcomeLabel">{content.WELCOME_LABEL}</label>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="rowRectangle"></div>
                </div>
                <div className="loginComponentRightRow"></div>
            </div>
        </div>
    )
};

export default LoginComponent;