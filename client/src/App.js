import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getMessages, sendMessage } from './api'

import NameField from './components/NameField'
import ChatWindow from './components/ChatWindow'
import ChatMessage from './components/ChatMessage'
import MessageField from './components/MessageField'

class App extends Component {

  state = {
    username: 'User',
    messages: [],
  };

  componentWillMount(){
    getMessages().then(messages => {
      this.setState({messages})
    }).catch(err => {
      console.error(err)
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello {this.state.heading}</h1>
        </header>
        //<nameField username={this.state.username} handleRename={this.handleRename}/>
        <ChatWindow>
          {this.state.messages.map(message =>{
            <ChatMessage sender={message.sender} body={message.body} date={message.date}/>
          })}
          //<MessageField message={this.state.message} handleSend={this.handleSend}/> 
        </ChatWindow>
      </div>
    );
  }
}

export default App;
