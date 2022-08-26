import React from "react";


const Notification = (props) => {
    const {notificationData} = props;
    console.log(notificationData)

    const getReadableTime = (timeArray) => {
        return timeArray[2] + '-' + timeArray[1] + '-' + timeArray[0] + ' ' +
               timeArray[3] + ':' + timeArray[4] + ':' + timeArray[5];
    }

    return (
        <div>
           {notificationData.map((item, index) => (
            <div key={index}>
                <span>{getReadableTime(item.time)}</span>
                <span>{item.data}</span>
            </div>
           ))}
        </div>
    )
}

export default Notification