import React from 'react'
import StreamListEntryData from './StreamListEntryData';
import './StreamListEntry.css'
import { Icon } from '@iconify/react';

const StreamListEntry = (props) => {
    const {entry} = props;

    const openStreamPage = (e) => {
        e.preventDefault();
        window.open(entry.url, '_blank');
    }

    return (
        <div className={entry.live ? 'stream-list-entry-box-live' : 'stream-list-entry-box'}>
            <div className='stream-list-entry-box-header'>
                <span className='stream-list-entry-name'>{entry.name}</span>
                <span className='stream-list-entry-name'>{entry.platform}</span>
                <Icon icon="akar-icons:link-chain" color="#fefefe" onClick={(e) => openStreamPage(e)}/>
            </div>
            {entry.live && 
                <StreamListEntryData entryData={entry.currentData} />
            }
        </div>
    )
}

export default StreamListEntry;