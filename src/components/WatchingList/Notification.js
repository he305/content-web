import React from "react";


const Notification = (props) => {
    const {notificationData} = props;
    console.log(notificationData)

    return (
        <div>
           {notificationData.map((item, index) => (
            <div key={index}>
                <span>{item.time}</span>
                <span>{item.data}</span>
            </div>
           ))}
        </div>
    )
}

export default Notification