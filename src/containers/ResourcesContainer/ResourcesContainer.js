import React from 'react';
import "./styles.scss";
import ResourcesComponent from "../../components/ResourcesComponent";

const ResourcesContainer = () => {
    const handleClick = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className="resourcesContainer">
            <ResourcesComponent 
                handleClick={handleClick}
            />
        </div>
    );
}

export default ResourcesContainer;