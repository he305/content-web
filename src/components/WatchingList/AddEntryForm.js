import React, {useState} from 'react'
import watchingListService from '../../api/watchingList.service';
import ChangeContentAccountForm from './ChangeContentAccountForm';
import './AddEntryForm.css'

function AddEntryForm(props) {

    
    const[entryName, setEntryName] = useState("")
    const[accounts, setAccounts] = useState([])
    const[errorMessage, setErrorMessage] = useState({
        message : "",
        isLoading: false
    })

    const addEntry = async (e) => {
        e.preventDefault()
        setErrorMessage({
            message : "",
            isLoading: false
        })
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
                setErrorMessage({
                    message : error.response.data.message,
                    isLoading: true
                })
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
            {errorMessage.isLoading && 
            <span>{errorMessage.message}</span>}
        </form>
    </div>
  )
}

export default AddEntryForm