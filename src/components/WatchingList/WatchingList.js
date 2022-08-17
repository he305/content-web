import React, {useState, useEffect} from 'react';
import watchingListService from '../../api/watchingList.service';
import WatchingListEntry from './WatchingListEntry';
import AddEntryForm from './AddEntryForm';
import './WatchingList.css'

const WatchingList = () => {
    const[watchingList, setWatchingList] = useState([]);
    const[addEntryForm, setAddEntryForm] = useState(false);

    const toggleEntryForm = () => {
        setAddEntryForm(!addEntryForm);
    }

    const updateEntries = () => {
        watchingListService.getWatchingList().then((response) => {
            let list = response.data.data;
            setWatchingList(list)
        },
        (error) => {
            console.log(error);
        })
    }

    useEffect(() =>{
        updateEntries();
        const interval = setInterval(() => {
            updateEntries();
        }, 1000 * 1 * 30);
        return () => clearInterval(interval);
    }, []);

    return (
      <div className="watching-list-container">
        <ul>
        {watchingList.map((item, index) => (
                    <WatchingListEntry entry={item} key={index} />
                    ))} 
        </ul>
        <button className="watching-list-add-button" onClick={toggleEntryForm}>Add new entry</button>
        { addEntryForm && 
            <AddEntryForm onConfirm={toggleEntryForm}/>
        }
      </div>
    );
}

export default WatchingList;