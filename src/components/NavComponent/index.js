import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../common/Icon";
import Button from "../../common/Button";

const NavComponent = () => {
    const liArray = content.NAV_DETAILS.map((li => <li><span>{li.TITLE}:</span>&nbsp;{li.CONTENT}</li>));
    return (
        <div className="navComponent">
            <div className="navIconMainContainer"><Icon className="navIconMain" iconName="logo-main" /></div>
            <div className="navContentContainer">
                <ul className="navDetailsRow">
                    <li className="navTitle">{content.TITLE}</li>
                    {liArray}
                </ul>
                <ul className="navLinks">
                    LINKS GO HERE
                </ul>
            </div>
        </div>
    );
}

export default NavComponent;