import React, {useState} from 'react'
import ContentAccount from './ContentAccount'
import './WatchingListEntry.css'
import { Icon } from '@iconify/react';
import UpdateEntryForm from './UpdateEntryForm';
import DeleteDialog from '../DeleteDialog';
import watchingListService from '../../api/watchingList.service';

function WatchingListEntry(props) {
    const entry = props.entry;
    const[updateEntryForm, setUpdateEntryForm] = useState(false)
    const [deleteDialog, setDeleteDialog] = useState({
        title: "",
        isLoading: false
    })

    const toggleUpdateEntryForm = () => {
        setUpdateEntryForm(!updateEntryForm)
    }

    const deleteEntry = async () => {
        try {
            await watchingListService.deleteEntry(entry.name).then(() => {
                window.location.reload();
            },
            (error) => {
                console.log(error);
            });
        } catch (err) {
            console.log(err);
        }
    }

    const onDialogChoose = (choose) => {
        setDeleteDialog({
            title: "",
            isLoading: false
        })

        if (choose) {
            deleteEntry();
        }
    }

    const handleDelete = () => {
        setDeleteDialog({
            title: "Are you sure?",
            isLoading: true
        })
    }


  return (
    <>
    <div className="list-entry-box">
        <div className="list-entry-box-header">
            <h2 className="list-entry-name">{entry.name}</h2>
            <Icon icon="akar-icons:edit" color="#fefefe" onClick={toggleUpdateEntryForm} />
            <Icon icon="ant-design:delete-outlined" color="#fefefe" onClick={handleDelete}/>
        </div>
        {entry.accounts.map((item, index) => (
            <ContentAccount item={item} key={index} />
        ))}
        {deleteDialog.isLoading && <DeleteDialog dialogTitle={deleteDialog.title} onConfirm={onDialogChoose}/>}
    </div>
        { updateEntryForm && 
                <UpdateEntryForm entry={entry}/>
            }
    </>
  )
}

export default WatchingListEntry