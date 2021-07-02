import React, {useEffect, useState} from 'react';
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';
import db from '../firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name }) {
    const [ messages, setMessages ] = useState("");
    
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    return (
        <Link to={`/rooms/${id}`} key={id}>
            <div className="sidebarChat">
                <Avatar />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p className='msg'>{messages[0]?.message}</p>
                    <p className='timestamp'>
                        {new Date(messages[0]?.timestamp?.toDate()).toUTCString()}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat
