import React, {useEffect, useState} from 'react'
import './ContentAccount.css'
import { Icon } from '@iconify/react';
import { Badge } from '@mui/material';
import Notification from './Notification';
import WatchingListService from '../../api/watchingList.service';

function ContentAccount(props) {
    const item = props.item;
    const [platformIcon, setPlatformIcon] = useState(undefined)
    const [notificationSize, setNotificationSize] = useState(item.notificationSize);
    const [notificationData, setNotificationData] = useState({
        data: [],
        isLoading: false
    })

    useEffect(() => {
        setNotificationSize(item.notificationSize)
        switch(item.platform) {
            case "TWITCH" :
                setPlatformIcon(<Icon icon="mdi:twitch" width="30" height="30" />);
                break;
            default:
                setPlatformIcon(<span>{item.platform}</span>)
                break;
        }
    }, [item])

    const callGetNotifications = async () => {
        try {
            await WatchingListService.getNotifications(item.name, item.platform).then((response) => {
                let datas = response.data.notificationDtoList;
                console.log(datas);
                setNotificationData({
                    data: datas,
                    isLoading: true
                })
            },
            (error) => {
                console.log(error);
            });
        } catch (err) {
            console.log(err);
        }
    }

    const getNotifications = async (e) => {
        if (notificationSize === 0 && !notificationData.isLoading) return;

        setNotificationSize(0);
        if (!notificationData.isLoading) {
            callGetNotifications();
        } else {
            setNotificationData({
                data: [],
                isLoading: false
            })
        }
    }

  return (
    <div className="content-account-list">
        <span>{item.alias}</span>
        <Badge className="content-account-badge" badgeContent={notificationSize} color="secondary" onClick={getNotifications}>
            {platformIcon}
        </Badge>
        {notificationData.isLoading && <Notification notificationData={notificationData.data} />}
    </div>
  )
}

export default ContentAccount