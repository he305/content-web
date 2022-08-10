import React, {useState} from 'react'
import watchingListService from '../../api/watchingList.service';

function UpdateEntryForm(props) {
    
    const entry = props.entry
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
    <div>
        <form>
            <input type="text" placeholder={entry.name} value={entryName} onChange={(e) => setEntryName(e.target.value)}></input>
            <div>
                <input type="text" placeholder="Enter account nickname" value={accountName} onChange={(e) => setAccountName(e.target.value)}></input>
                <input type="text" placeholder="Enter platform" value={platform} onChange={(e) => setPlatform(e.target.value)}></input>
            </div>
            <button type="submit" onClick={addEntry}>Enter</button>
        </form>
    </div>
  )
}

export default UpdateEntryForm