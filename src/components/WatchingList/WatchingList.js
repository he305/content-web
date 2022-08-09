import React, {useState, useEffect} from 'react';
import watchingListService from '../../api/watchingList.service';

const WatchingList = () => {
    const[watchingList, setWatchingList] = useState("")

    const isLoaded = false;

    const getWatchingList = async (e) => {
        e.preventDefault();
        
    };

    useEffect(() =>{
        watchingListService.getWatchingList().then((response) => {
            console.log(response);
        },
        (error) => {
            console.log(error);
        })
    });

    return (
      <div></div>
    );
}

export default WatchingList;