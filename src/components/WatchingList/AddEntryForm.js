import React, {useState} from 'react'
import watchingListService from '../../api/watchingList.service';
import ChangeContentAccountForm from './ChangeContentAccountForm';
import './AddEntryForm.css'

function AddEntryForm() {
    
    const[entryName, setEntryName] = useState("")
    const[accounts, setAccounts] = useState([])

    const addEntry = async (e) => {
        e.preventDefault()
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

    const accountsChanged = (newAccounts) => {
        setAccounts(newAccounts)
    }

  return (
    <div className="add-entry-form">
        <form>
            <input type="text" placeholder="Enter entry name" value={entryName} onChange={(e) => setEntryName(e.target.value)}></input>
            <ChangeContentAccountForm onAccountsChange={accountsChanged} />
            <button type="submit" onClick={addEntry}>Enter</button>
        </form>
    </div>
  )
}

export default AddEntryForm