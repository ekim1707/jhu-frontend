import React from 'react';
import "./styles.scss";
import content from "./content";
import Button from "../../common/Button";
import CreateForm from "./CreateForm";
import EntryLogs from "./EntryLogs";

const JournalComponent = ({
    isCreate,
    setIsCreate,
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
            <div className="titleContainer">
                <div className="titleButtonContainer">
                    <Button 
                        className="journalFormAddButton"
                        onClick={() => setIsCreate(true)}
                        iconName="add_button"
                        isIcon
                        disabled={!isCreate}
                    />
                    <Button 
                        className="journalFormMenuButton"
                        onClick={() => setIsCreate(false)}
                        iconName="menu"
                        isIcon
                        disabled={isCreate}
                    />
                </div>
                <h1>{content.TITLE}</h1>
            </div>
            {isCreate && (
                <CreateForm
                    title={title}
                    timestamp={timestamp}
                    location={location}
                    mood={mood}
                    music={music}
                    entry={entry}
                    handleChange={handleChange}
                    disabled={disabled}
                    handleSubmit={handleSubmit}
                />
            )}
            {!isCreate && (
                <EntryLogs />
            )}
        </div>
    );
}

export default JournalComponent;