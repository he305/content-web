import React, {useState} from 'react'
import ContentAccount from './ContentAccount'
import './WatchingListEntry.css'
import { Icon } from '@iconify/react';
import UpdateEntryForm from './UpdateEntryForm';

function WatchingListEntry(props) {
    const entry = props.entry;
    const[updateEntryForm, setUpdateEntryForm] = useState(false)

    const toggleUpdateEntryForm = () => {
        setUpdateEntryForm(!updateEntryForm)
    }

  return (
    <>
    <div className="list-entry-box">
        <div className="list-entry-box-header">
            <h2 className="list-entry-name">{entry.name}</h2>
            <Icon icon="akar-icons:edit" color="#fefefe" onClick={toggleUpdateEntryForm} />
        </div>
        {entry.accounts.map((item, index) => (
            <ContentAccount item={item} key={index} />
        ))}
    </div>
    { updateEntryForm && 
            <UpdateEntryForm entry={entry}/>
        }
    </>
  )
}

export default WatchingListEntry