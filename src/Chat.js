import React,{ useState, useEffect} from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { AttachFile,MoreVert,SearchOutlined } from '@material-ui/icons';

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000))
    }, []); 

const sendMessage = (e) => {};

    return (
        <div className="chat">
            <div className="chat__header">
               <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
               <div className="chat__headerInfo">
                   <h3>Room Name</h3>
                   <p>Last Seen at....</p>
               </div>
               <div className="chat__headerRight">
                     <IconButton>
                     <SearchOutlined />
                     </IconButton>
                     <IconButton>
                     <AttachFile />
                     </IconButton>
                     <IconButton>
                     <MoreVert />
                     </IconButton>
               </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                <span className="chat__name">Sachin</span>
                    HIiiiiii.
                <span className="chat__timestamp">3:52 pm</span> 
                </p>
                <p className="chat__message ">
                <span className="chat__name">Sachin</span>
                    HIiiiiii.
                <span className="chat__timestamp">3:52 pm</span> 
                </p>
            </div>
            <div className="chat__footer">
                <IconButton>
                <InsertEmoticonIcon />
                </IconButton>
                <form>
                  <input type="text" placeholder="Search a message"></input>
                  <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <IconButton>
                <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
