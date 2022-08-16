import React, {useState} from 'react'
import watchingListService from '../../api/watchingList.service';
import ChangeContentAccountForm from './ChangeContentAccountForm';
import './AddEntryForm.css'

function AddEntryForm(props) {

    
    const[entryName, setEntryName] = useState("")
    const[accounts, setAccounts] = useState([])

    const addEntry = async (e) => {
        e.preventDefault()
        let accs = accounts.map((item, index) => {
            let alias = item.alias;
            if (alias === "") {
                alias = item.name;
            }
            return {
                alias: alias,
                name: item.name,
                platform: item.platform
            }
        })
        try {
            await watchingListService.addWatchingListEntry(entryName, accs).then(() => {
                props.onConfirm();
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
    <div className="add-entry-box">
        <form className="add-entry-form">
            <input type="text" placeholder="Enter entry name" value={entryName} onChange={(e) => setEntryName(e.target.value)}></input>
            <ChangeContentAccountForm onAccountsChange={accountsChanged} />
            <div>
                <button type="submit" onClick={addEntry}>Enter</button>
                <button type="submit" onClick={props.onConfirm}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AddEntryForm