import React from 'react';
import "./styles.scss";

const CalendarComponent = () => {
    return (
        <div className="calendarComponent">
            <div className="calendarIconContainer">
                <img className="calendarIcon" src={`${process.env.PUBLIC_URL}/img/academic_calendar_Spring_2021.png`} alt="" />
            </div>
        </div>
    );
}

export default CalendarComponent;