import React from 'react'
import StreamListEntryData from './StreamListEntryData';
import './StreamListEntry.css'

const StreamListEntry = (props) => {
    const {entry} = props;


    return (
        <div className={entry.live ? 'stream-list-entry-box-live' : 'stream-list-entry-box'}>
            <div className='stream-list-entry-box-header'>
                <span className='stream-list-entry-name'>{entry.name}</span>
                <span className='stream-list-entry-name'>{entry.platform}</span>
            </div>
            {entry.live && 
                <StreamListEntryData entryData={entry.currentData} />
            }
        </div>
    )
}

export default StreamListEntry;