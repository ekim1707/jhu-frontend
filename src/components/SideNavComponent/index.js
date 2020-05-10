import React from 'react';
import "./styles.scss";
import content from "./content";
import { NavLink } from "react-router-dom";
import Icon from "../../common/Icon";

const SideNavComponent = () => {
    const sideLinksArray = content.LINKS.map((name, i) => {
        return <NavLink to={name} className="sideNavLinks hoverable" key={i}><Icon className="sideNavLinksIcons"iconName={name} /></NavLink>;
    });

    return <div className="sideNavComponent">{sideLinksArray}</div>;
}

export default SideNavComponent;