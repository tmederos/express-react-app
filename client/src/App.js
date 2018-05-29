import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {getTest} from './api'

class App extends Component {

  state = {
    username: 'User',
  };

  componentWillMount(){
    getTest().then(response => {
      this.setState({heading: response.data.message})
    }).catch(err => {
      this.setState({heading: 'Could not make the request'})
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.heading}</h1>
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
