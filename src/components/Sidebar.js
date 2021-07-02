import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import db from '../firebase';
import { SearchOutlined } from "@material-ui/icons";

function Sidebar(props) {

    const [ rooms, setRooms ] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )
            ))
        ));

        return () => {
            unsubscribe();
        }
    }, [] ); 

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src='https://i.postimg.cc/KYhZ14XY/20190602145823-IMG-3778-011-jpg.jpg' />
                <div>
                    Sandesh
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar_chats">
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;