import React, {useEffect, useState} from 'react'
import './ContentAccount.css'
import { Icon } from '@iconify/react';

function ContentAccount(props) {
    const item = props.item;
    const [platformIcon, setPlatformIcon] = useState(undefined)

    useEffect(() => {
        switch(item.platform) {
            case "TWITCH" :
                setPlatformIcon(<Icon icon="mdi:twitch" width="30" height="30" />);
                break;
            default:
                setPlatformIcon(undefined)
                break;
        }
    }, [item])

  return (
    <div className="content-account-list">
        <span>{item.name}</span>
        <span>{platformIcon}</span>
        <span>{item.notificationSize}</span>
    </div>
  )
}

export default ContentAccount