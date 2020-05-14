import React from 'react';
import "./styles.scss";
import content from "./content";
import Input from "../../common/InputField";
import TextArea from "../../common/TextArea";
import Button from "../../common/Button";

const JournalComponent = ({
    title,
    timestamp,
    location,
    mood,
    music,
    entry,
    handleChange
}) => {
    return (
        <div className="journalComponent">
            <h1>{content.TITLE}</h1>
            <div className="journalFormContainer">
                <div className="inputContainer">
                    <Input 
                        id="journalTitle"
                        className="inputField"
                        onChange={(e) => handleChange(e)}
                        value={title}
                        placeholder={content.TITLE_LABEL}
                    />
                </div>
                <div className="detailsInputContainer">
                    <div className="inputContainer">
                        <label for="journalTimestamp">{content.TIMESTAMP_LABEL}</label>
                        <Input 
                            id="journalTimestamp"
                            className="inputField"
                            onChange={(e) => handleChange(e)}
                            value={timestamp}
                        />
                    </div>
                    <div className="inputContainer">
                        <label for="journalLocation">{content.LOCATION_LABEL}</label>
                        <Input 
                            id="journalLocation"
                            className="inputField"
                            onChange={(e) => handleChange(e)}
                            value={location}
                        />
                    </div>
                    <div className="inputContainer">
                        <label for="journalMood">{content.MOOD_LABEL}</label>
                        <Input 
                            id="journalMood"
                            className="inputField"
                            onChange={(e) => handleChange(e)}
                            value={mood}
                        />
                    </div>
                    <div className="inputContainer">
                        <label for="journalMusic">{content.MUSIC_LABEL}</label>
                        <Input 
                            id="journalMusic"
                            className="inputField"
                            onChange={(e) => handleChange(e)}
                            value={music}
                        />
                    </div>
                </div>
                <div className="journalTextAreaContainer">
                    <label for="journalTextArea">{content.ENTRY_LABEL}</label>
                    <TextArea 
                        id="journalTextArea"
                        rows="20"
                        className="textArea"
                        onChange={(e) => handleChange(e)}
                        value={entry}
                    />
                </div>
            </div>
        </div>
    );
}

export default JournalComponent;