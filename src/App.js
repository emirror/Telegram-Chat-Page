import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Chat from './components/chat';
import Send from './components/send';
import Detail from './components/detail';


let id = 0;
function App() {

  // set the state for messages to show on chat
  const [messages, setMessages] = useState([]);

  // update chat with message and time
  const getMessage = msg => {
    const getTime = new Date();
    const hours = getTime.getHours();
    const minutes = getTime.getMinutes();
    const chat = document.querySelector('#messages ul');
    const list = document.querySelectorAll('#messages li');
    let last = list[list.length - 1].offsetTop;

    setTimeout(() => {
      setMessages([...messages, {
        id: id,
        message: msg,
        hour: hours,
        minute: minutes
      }]);
      id++;

      chat.scrollTop = last;
    }, 2000);
  }


  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Chat allMessages={messages} />
          <Send message={getMessage} />
        </Route>
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
