import React from 'react';
import "./styles.scss";
import content from "./content";
import { NavLink } from "react-router-dom";
import Icon from "../../common/Icon";

const NavComponent = () => {
    return (
        <div className="navComponent">
            <div className="navIconMainContainer"><Icon className="navIconMain" iconName="logo_main" /></div>
            <div className="navContentContainer">
                <ul className="navDetailsRow">
                    <li className="navTitle">{content.TITLE}</li>
                    {content.NAV_DETAILS.map((li, i) => <li key={i}><span>{li.TITLE}:</span>&nbsp;{li.CONTENT}</li>)}
                </ul>
                <div className="navLinksContainer">
                    {content.NAV_LINKS.map((link, i) => <NavLink exact to={link === "HOME" ? "/" : `/${link.toLowerCase()}`} className="navLinks" key={i}>{link}</NavLink>)}
                </div>
            </div>
        </div>
    );
}

export default NavComponent;