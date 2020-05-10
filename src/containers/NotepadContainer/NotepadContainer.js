import React from 'react';
import "./styles.scss";
import NotepadComponent from "../../components/NotepadComponent";

const NotepadContainer = () => {
    return (
        <div className="notepadContainer">
            <NotepadComponent />
        </div>
    );
}

export default NotepadContainer;