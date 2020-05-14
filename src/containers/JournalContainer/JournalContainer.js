import React, { useReducer } from 'react';
import "./styles.scss";
import JournalComponent from "../../components/JournalComponent";

const JournalContainer = () => {
    const [formData, setFormData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            journalTitle: "",
            journalTimestamp: "",
            journalLocation: "",
            journalMood: "",
            journalMusic: "",
            journalTextArea: ""
        }
    );
    const {
        journalTitle,
        journalTimestamp,
        journalLocation,
        journalMood,
        journalMusic,
        journalTextArea
    } = formData;
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    return (
        <div className="JournalContainer">
            <JournalComponent 
                title={journalTitle}
                timestampe={journalTimestamp}
                location={journalLocation}
                mood={journalMood}
                music={journalMusic}
                entry={journalTextArea}
                handleChange={handleChange}
            />
        </div>
    );
}

export default JournalContainer;