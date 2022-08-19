import React, {useState, useEffect} from 'react'
import watchingListService from '../../api/watchingList.service';
import ChangeContentAccountForm from './ChangeContentAccountForm';

function UpdateEntryForm(props) {
    
    const entry = props.entry
    const initialEntryName = props.entry.name;
    const[entryName, setEntryName] = useState("")
    const[accounts, setAccounts] = useState([])

    const updateEntry = async (e) => {
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
            await watchingListService.updateEntry(initialEntryName, accs).then(async () => {
                if (initialEntryName !== entryName) {
                    await watchingListService.updateWatchingListEntryName(initialEntryName, entryName).then(() => {
                        window.location.reload();
                    }).catch((error) => console.log(error))
                } else {
                    window.location.reload();
                }
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

    useEffect(() => {
        if (entry !== undefined) {
            setEntryName(entry.name);
            let data = []
            entry.accounts.forEach((acc, index) => {
                let newAcc = {
                    alias: acc.alias,
                    name: acc.name,
                    platform: acc.platform
                };
                data = [...data, newAcc];
            })
            setAccounts(data);
        }
    }, [entry])

  return (
    <div>
        <form>
            <input type="text" placeholder="Enter entry name" value={entryName} onChange={(e) => setEntryName(e.target.value)}></input>
            <ChangeContentAccountForm onAccountsChange={accountsChanged} initialAccounts={entry.accounts}/>
            <button type="submit" onClick={updateEntry}>Enter</button>
        </form>
    </div>
  )
}

export default UpdateEntryForm