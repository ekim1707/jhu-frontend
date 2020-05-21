import React from 'react';
import "./styles.scss";
import content from "./content";
import Iframe from "../../common/Iframe";
import letter from "../../assets/img/AcceptanceLetter.pdf";
import guide from "../../assets/img/StudentGuide.pdf";
import Icon from "../../common/Icon";

const HomeComponent = () => {
    return (
        <div className="homeComponent">
            <div className="homeComponentMediaContainer">
                <div className="homeComponentRow">
                    <div className="iFrameContainer">
                        <label>{content.ACCEPTANCE_DATE_LABEL}</label>
                        <Iframe className="letterIframe" src={letter} width="400px" height="550px" />
                    </div>
                    <div className="iFrameContainer">
                        <label>{content.STUDENT_GUIDE_LABEL}</label>
                        <Iframe className="guideIframe" src={guide} width="400px" height="550px" />
                    </div>
                </div>
                <div className="homeComponentRow">
                    <div className="iconContainer">
                        <label>{content.STUDENT_PROFILES_LABEL}</label>
                        <div className="iconContainerRow">
                            <Icon className="profileIcon" iconName="profile1" />
                            <Icon className="profileIcon" iconName="profile2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;