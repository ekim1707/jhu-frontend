import React from 'react';
import "./styles.scss";
import content from "./content";
import Iframe from "../../common/Iframe";
import guide from "../../assets/img/StudentGuide.pdf";
import Icon from "../../common/Icon";

const HomeComponent = ({
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    handleClick
}) => {
    return (
        <div className="homeComponent">
            <div className="homeComponentMediaContainer">
                <div className="homeComponentRow">
                    <div className="homeComponentCol">
                        <label>{content.ACCEPTANCE_DATE_LABEL}</label>
                        <div onClick={() => handleClick("firstImage", !firstImage)}  className="imageContainer">
                            <div className="imageBackground" style={firstImage ? { 
                                position: "fixed",
                                width: "100%",
                                height: "100%",
                                zIndex: 100000000
                            } : {
                                position: "relative",
                                width: "fit-content",
                                height: "fit-content",
                                zIndex: "initial"
                            }}>
                                <img src={`${process.env.PUBLIC_URL}/img/acceptance_letter.png`} alt="" style={firstImage ? {
                                    width: "50%",
                                    height: "auto"
                                } : {
                                    width: "400px",
                                    height: "auto"
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="homeComponentCol">
                        <label>{content.STUDENT_GUIDE_LABEL}</label>
                        <div className="iFrameContainer">
                            <div onClick={() => handleClick("secondImage", !secondImage)} className="toggleIconContainer">
                                <Icon className="toggleIcon" iconName={secondImage ? "close" : "maximize"} />
                            </div>
                            <Iframe className="iFrame" src={guide} width="400px" height="550px" />
                        </div>
                    </div>
                </div>
                <div className="homeComponentRow">
                    <div className="iconContainer">
                        <label>{content.STUDENT_PROFILES_LABEL}</label>
                        <div className="iconContainerRow">
                            <div onClick={() => handleClick("thirdImage", !thirdImage)} className="imageContainer">
                                <div className="imageBackground" style={thirdImage ? { 
                                    position: "fixed",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 100000000
                                } : {
                                    position: "relative",
                                    width: "fit-content",
                                    height: "fit-content",
                                    zIndex: "initial"
                                }}>
                                    <img src={`${process.env.PUBLIC_URL}/img/profile1.png`} alt="" style={thirdImage ? {
                                        width: "auto",
                                        height: "90%",
                                        zIndex: 100000000
                                    } : {
                                        width: "400px",
                                        height: "auto",
                                        zIndex: "initial"
                                    }} />
                                </div>
                            </div>
                            <div onClick={() => handleClick("fourthImage", !fourthImage)} className="imageContainer">
                                <div className="imageBackground" style={fourthImage ? { 
                                    position: "fixed",
                                    width: "100%",
                                    height: "100%"
                                } : {
                                    position: "relative",
                                    width: "fit-content",
                                    height: "fit-content"
                                }}>
                                    <img src={`${process.env.PUBLIC_URL}/img/profile2.png`} alt="" style={fourthImage ? {
                                        width: "auto",
                                        height: "90%"
                                    } : {
                                        width: "400px",
                                        height: "auto"
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;