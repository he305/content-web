import React, {useState, useEffect} from "react";
import SelectPlatform from "./SelectPlatform";
import { Icon } from '@iconify/react';
import './ChangeContentAccountForm.css';

const ChangeContentAccountForm = (props) => {

    const initialAccounts = props.initialAccounts;
    const[accounts, setAccounts] = useState([
        {
            name: "",
            platform: ""
        },
    ]);

    const handleNameChange = (event, index) => {
        let data = [...accounts];
        data[index][event.target.name] = event.target.value;
        setAccounts(data);

        props.onAccountsChange(data);
    }

    const handlePlatformChange = (value, index) => {
        let data = [...accounts];
        data[index]['platform'] = value;
        setAccounts(data);
        console.log(data);

        props.onAccountsChange(data);
    }

    const addFields = () => {
        let account = {
            name: "",
            platform: ""
        }

        setAccounts([...accounts, account]);
    }

    useEffect(() => {
        if (initialAccounts !== undefined) {
            let data = []
            initialAccounts.forEach((acc, index) => {
                let newAcc = {
                    name: acc.name,
                    platform: acc.platform
                };
                data = [...data, newAcc];
            })
            setAccounts(data);
        }
    }, [initialAccounts])

    const removeField = (index) => {
        console.log(index)
        console.log("here")
        let data = [...accounts];
        data.splice(index, 1);
        setAccounts(data);

        props.onAccountsChange(data);
    }

    return (
        <>
        {accounts.map((account, index) => {
            return (
            <div className="change-content-account-box" key={index}>
                <input type="text" onChange={(e) => handleNameChange(e, index)} name='name' placeholder="Enter account nickname" value={account.name}></input>
                <SelectPlatform currentValue={{value: account.platform, label: account.platform}} selectPlatformIndex={index} sendPlatform={handlePlatformChange} value={account.platform}/>
                {/* <input type="text" onChange={(e) => handlePlatformChange(e)} name='platform' placeholder="Enter platform" value={account.platform}></input>
                { */}
                {   index === accounts.length - 1 && 
                    <Icon icon="akar-icons:circle-plus-fill" color="#060b26" onClick={addFields}/>
                }
                {   accounts.length !== 1 &&
                    <Icon icon="clarity:remove-solid" color="#060b26" onClick={(e) => {
                        e.preventDefault();
                        removeField(index)
                    }}/>
                }
            </div>
            );
        })}
        </>
    )
}

export default ChangeContentAccountForm;