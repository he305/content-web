import React, {useState, useEffect} from "react";
import StreamListEntry from "./StreamListEntry";
import StreamListService from "../../api/streamlist.service";
import './StreamList.css'


const StreamList = () => {
    const[streamList, setStreamList] = useState([]) 
    const[errorMessage, setErrorMessage] = useState({
        text: "",
        isLoading: false
    });


    const getStreamList = async () => {
        await StreamListService.getStreamList().then((response) => {
            let data = response.data.entries;
            data.sort((a,b) => {
                if (a.live === b.live) {
                    return b.currentData.viewerCount - a.currentData.viewerCount;
                }
                return a.live < b.live ? 1 : -1;
            })
            setStreamList(data);
            setErrorMessage({text: "", isLoading: false})
        }).catch((error) => {
            setErrorMessage({
                text: "No stream list found. Either add entries to your watching list or refresh page.",
                isLoading: true
            })
        })
    }

    useEffect(() => {
        getStreamList();
        const interval = setInterval(() => {
            getStreamList();
        }, 1000 * 1 * 30);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="stream-list-container">
        {errorMessage.isLoading && 
            <span>{errorMessage.text}</span>
        }
        {streamList.map((item, index) => (
            <StreamListEntry key={index} entry={item} />
        ))}
        </div>
    )
}

export default StreamList;