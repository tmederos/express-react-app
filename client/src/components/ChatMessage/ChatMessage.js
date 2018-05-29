import React from 'react'

const ChatWindow = props => (
  <p class = "chat-message">
    <span class="chat-timestamp">
      {props.date}
    </span>
    <span class = "chat-sender">
      {this.props.sender}:
    </span>
    <span class = "chat-body">
      {this.props.body}:
    </span>
  </p>
)