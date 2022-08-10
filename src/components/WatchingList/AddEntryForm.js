import React, {useState} from 'react'
import watchingListService from '../../api/watchingList.service';
import SelectPlatform from './SelectPlatform'; 
import './AddEntryForm.css'

function AddEntryForm() {
    
    const[entryName, setEntryName] = useState("")
    const[accountName, setAccountName] = useState("")

    const[platform, setPlatform] = useState("")

    const addEntry = async (e) => {
        e.preventDefault()
        const accounts = [{
            name: accountName,
            platform: platform
        }]

        try {
            await watchingListService.addWatchingListEntry(entryName, accounts).then(() => {
                window.location.reload();
            },
            (error) => {
                console.log(error);
            });
        } catch (err) {
            console.log(err);
        }

    }

  return (
    <div className="add-entry-form">
        <form>
            <input type="text" placeholder="Enter entry name" value={entryName} onChange={(e) => setEntryName(e.target.value)}></input>
            <div>
                <input type="text" placeholder="Enter account nickname" value={accountName} onChange={(e) => setAccountName(e.target.value)}></input>
                <SelectPlatform />
                {/* <input type="text" placeholder="Enter platform" value={platform} onChange={(e) => setPlatform(e.target.value)}></input> */}
            </div>
            <button type="submit" onClick={addEntry}>Enter</button>
        </form>
    </div>
  )
}

export default AddEntryForm