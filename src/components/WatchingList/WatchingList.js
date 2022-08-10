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

    useEffect(() =>{
        watchingListService.getWatchingList().then((response) => {
            console.log(response.data.watchingList);
            setWatchingList(response.data.watchingList)
        },
        (error) => {
            console.log(error);
        })
    }, []);

    return (
      <div className="watching-list-container">
        <ul>
        {watchingList.map((item, index) => (
                    <WatchingListEntry entry={item} key={index} />
                    ))} 
        </ul>
        <button onClick={toggleEntryForm}>Add new entry</button>
        { addEntryForm && 
            <AddEntryForm />
        }
      </div>
    );
}

export default WatchingList;

{/* <ul>
        {watchingList.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.name}</span>
                            <ul>
                            {watchingList[index].accounts.map((itemin, j) => {
                                return (
                                <li key={j}>
                                    <span>{itemin.name}</span>
                                    <span>{itemin.platform}</span>    
                                </li>
                                )
                            })}    
                            </ul>  
                        </li>
                    ) 
                    })} 
        </ul> */}