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
    handleChange,
    disabled,
    handleSubmit
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
                    />
                    <label htmlFor="journalTitle">{content.TITLE_LABEL}</label>
                </div>
                <div className="detailsInputContainer">
                    <div className="inputContainer">
                        <Input 
                            id="journalTimestamp"
                            className="inputField"
                            onChange={(e) => handleChange(e)}
                            value={timestamp}
                        />
                        <label htmlFor="journalTimestamp">{content.TIMESTAMP_LABEL}</label>
                    </div>
                    <div className="inputContainer">
                        <Input 
                            id="journalLocation"
                            className="inputField"
                            onChange={(e) => handleChange(e)}
                            value={location}
                            hasIcon
                            iconPosition="right"
                            iconName="location"
                        />
                        <label htmlFor="journalLocation">{content.LOCATION_LABEL}</label>
                    </div>
                    <div className="inputContainer">
                        <Input 
                            id="journalMood"
                            className="inputField"
                            onChange={(e) => handleChange(e)}
                            value={mood}
                        />
                        <label htmlFor="journalMood">{content.MOOD_LABEL}</label>
                    </div>
                    <div className="inputContainer">
                        <Input 
                            id="journalMusic"
                            className="inputField"
                            onChange={(e) => handleChange(e)}
                            value={music}                            hasIcon
                            iconPosition="right"
                            iconName="musical_note"
                        />
                        <label htmlFor="journalMusic">{content.MUSIC_LABEL}</label>
                    </div>
                </div>
                <div className="journalTextAreaContainer">
                    <TextArea 
                        id="journalTextArea"
                        rows="20"
                        className="textArea"
                        onChange={(e) => handleChange(e)}
                        value={entry}
                        placeholder={content.ENTRY_LABEL}
                    />
                </div>
                <div className="buttonContainer">
                    <Button 
                        className="journalFormSubmitButton"
                        onClick={(e) => handleSubmit(e)}
                        buttonText="SUBMIT"
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
}

export default JournalComponent;