import React from 'react';
import SideNavComponent from "../../components/SideNavComponent";

const SideNavContainer = () => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <div className="sideNavContainer">
            <SideNavComponent 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
}

export default SideNavContainer;