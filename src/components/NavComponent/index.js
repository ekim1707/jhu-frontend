import React from 'react';
import "./styles.scss";
import content from "./content";
import { NavLink } from "react-router-dom";
import Icon from "../../common/Icon";
import Button from "../../common/Button";

const NavComponent = () => {
    const liArray = content.NAV_DETAILS.map((li, i) => <li key={i}><span>{li.TITLE}:</span>&nbsp;{li.CONTENT}</li>);
    const linksArray = content.NAV_LINKS.map(link => <NavLink exact to={link === "HOME" ? "/" : `/${link.toLowerCase()}`} className="navLinks">{link}</NavLink>);
    return (
        <div className="navComponent">
            <div className="navIconMainContainer"><Icon className="navIconMain" iconName="logo-main" /></div>
            <div className="navContentContainer">
                <ul className="navDetailsRow">
                    <li className="navTitle">{content.TITLE}</li>
                    {liArray}
                </ul>
                <div className="navLinksContainer">
                    {linksArray}
                </div>
            </div>
        </div>
    );
}

export default NavComponent;