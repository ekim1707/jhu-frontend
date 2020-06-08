import React, { useState, useReducer } from 'react';
import "./styles.scss";
import JournalComponent from "../../components/JournalComponent";

const JournalContainer = () => {
    const [isCreate, setIsCreate] = useState(true);
    const [formData, setFormData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            journalTitle: "",
            journalLocation: "",
            journalMood: "",
            journalMusic: "",
            journalTextArea: ""
        }
    );
    const {
        journalTitle,
        journalLocation,
        journalMood,
        journalMusic,
        journalTextArea
    } = formData;
    const timestamp = (new Date()).toLocaleDateString(
        {},
        {timeZone:"UTC", month:"long", day:"2-digit", year:"numeric"}
    ) + " (" + (new Date()).toLocaleTimeString(
        [], 
        { hour: "2-digit", minute: "2-digit" }
        ) + ")";
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('firing');
    }
    return (
        <div className="JournalContainer">
            <JournalComponent 
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                title={journalTitle}
                timestamp={timestamp}
                location={journalLocation}
                mood={journalMood}
                music={journalMusic}
                entry={journalTextArea}
                disabled={journalTextArea.length > 0 ? false : true}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default JournalContainer;