import React from 'react';
import { ChatStyle } from './style';

function Chat({ allMessages }) {
    return (
        <ChatStyle>
            <div id="messages" className="messages">
                <ul>
                    <li className="reciever">
                        <p className="text">
                            Hi :)
                            <span className="time">00:00</span>
                        </p>

                    </li>
                    <li>
                        <p className="text">
                            Hi
                            <span className="time">00:00</span>
                        </p>

                    </li>
                    <li className="reciever">
                        <p className="text">
                            You can text me, now.
                            <span className="time">00:00</span>
                        </p>
                    </li>
                    {
                        allMessages.map(message => {
                            return (
                                <li key={message.id}>
                                    <p className="text">{message.message}
                                        <span className="time">{message.hour}:{message.minute}</span>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </ChatStyle>
    )
}

export default Chat;
