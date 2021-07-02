import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import firebase from 'firebase';

function Chat() {
    const [ input, setInput ] = useState("");
    const { roomId } = useParams();
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });
        }
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: 'Sandesh',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return (
        <div className='chat'>
            <div className='chat_body'>
                { messages.map(message => (
                    <p className={`chat_message ${ message.name === 'Sandesh' && 'chat_receiver'}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestemp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                )) }
            </div>
            <div className='chat_footer'>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Say something" />
                    <button type="submit" onClick={sendMessage}> Send </button>
                </form>
            </div>
        </div>
    )
}

export default Chat
