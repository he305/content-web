import React from "react";
import './StreamListEntryData.css'

const StreamListEntryData = (props) => {
    const {entryData} = props;

    return (
        <div className="stream-list-stream-entry-data-box">
            <span>Title: {entryData.title}</span>
            <br />
            <span>Category: {entryData.gameName}</span>
            <br />
            <span>Viewers: {entryData.viewerCount}</span>
        </div>
        
    )
}

export default StreamListEntryData;