import React, {useState, useEffect} from "react";
import SelectPlatform from "./SelectPlatform";
import { Icon } from '@iconify/react';

const ChangeContentAccountForm = (props) => {

    const initialAccounts = props.initialAccounts;
    const[accounts, setAccounts] = useState([
        {
            name: "",
            platform: ""
        },
    ]);

    const handleDataChange = (event, index) => {
        let data = [...accounts];
        data[index][event.target.name] = event.target.value;
        setAccounts(data);

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
            <div key={index}>
                <input type="text" onChange={(e) => handleDataChange(e, index)} name='name' placeholder="Enter account nickname" value={account.name}></input>
                <input type="text" onChange={(e) => handleDataChange(e, index)} name='platform' placeholder="Enter platform" value={account.platform}></input>
                {
                    index === accounts.length - 1 && 
                    <Icon icon="akar-icons:circle-plus-fill" color="#060b26" onClick={addFields}/>
                }
                {   index > 0 &&
                    <Icon icon="clarity:remove-solid" color="#060b26" onClick={(e) => {
                        e.preventDefault();
                        removeField(index)
                    }}/>
                }
                {/* <SelectPlatform selectPlatformIndex={index} sendPlatform={handleDataChange} value={account.platform}/> */}
            </div>
            );
        })}
        </>
    )
}

export default ChangeContentAccountForm;