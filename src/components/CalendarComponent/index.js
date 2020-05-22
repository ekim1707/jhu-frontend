import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../common/Icon";

const CalendarComponent = () => {
    return (
        <div className="calendarComponent">
            <div className="calendarIconContainer">
                <Icon className="calendarIcon" iconName="academic_calendar" />
            </div>
        </div>
    );
}

export default CalendarComponent;