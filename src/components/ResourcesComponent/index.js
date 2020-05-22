import React from 'react';
import "./styles.scss";
import content from "./content";
import Button from "../../common/Button";

const ResourcesComponent = ({
    handleClick
}) => {
    return (
        <div className="resourcesComponent">
            <div className="resourcesMediaContainer">
                <ul className="resourcesButtonsContainer">
                    {content.BUTTONS_ARRAY.map(button => 
                        <Button 
                            className="resourcesButtons active" 
                            onClick={(e) => handleClick(e)}
                            buttonText={button}
                        />
                    )}
                </ul>
                <div className="resourcesContentContainer">

                </div>
            </div>
        </div>
    );
}

export default ResourcesComponent;