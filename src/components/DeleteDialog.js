import React from "react";
import './DeleteDialog.css'

const DeleteDialog = (props) => {
    const {dialogTitle, onConfirm} = props;


    return (
        <div className="dialog-box">
            <div className="dialog-box-window">
                <h2>{dialogTitle}</h2>
                <div className="dialog-box-buttons">
                    <button className="dialog-box-yes-button" type="submit" onClick={(e) => {
                        e.preventDefault();
                        onConfirm(true)
                    }}>Yes
                    </button>
                    <button className="dialog-box-no-button" type="submit" onClick={(e) => {
                        e.preventDefault();
                        onConfirm(false);
                    }}>No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteDialog;