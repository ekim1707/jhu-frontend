import React from 'react';
import "./styles.scss";
import content from "./content";
import { NavLink } from "react-router-dom";
import Icon from "../../common/Icon";

const SideNavComponent = ({
    isOpen,
    setIsOpen
}) => {
    return (
        <div className="sideNavComponent" style={{ marginLeft: isOpen ? 0 : "-140px" }}>
            <div onClick={() => setIsOpen(false)} className="sideNavCloseToggle">LEFT ARROW ICON HERE</div>
            <div onClick={() => setIsOpen(true)} className="sideNavOpenToggle" style={{ opacity: isOpen ? 0 : 1 }}>
                <div className="sideNavOpenText">Expand</div>
            </div>
            <div className="sideNavLinksContainer">
                {content.LINKS.map((name, i) => 
                    <NavLink to={name} className="sideNavLinks hoverable" key={i}>
                        <Icon className="sideNavLinksIcons"iconName={name} />
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default SideNavComponent;