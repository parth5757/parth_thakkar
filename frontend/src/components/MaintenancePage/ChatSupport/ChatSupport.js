import React, { Component } from 'react';
import './ChatSupport.css';

class ChatSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newMessage: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newMessage, messages } = this.state;
    if (newMessage.trim() !== '') {
      this.setState({
        messages: [...messages, { text: newMessage, isUser: true }],
        newMessage: '',
      });
    }
  };

  renderMessages = () => {
    return this.state.messages.map((message, index) => (
      <div key={index} className={message.isUser ? 'user-message' : 'support-message'}>
        {message.text}
      </div>
    ));
  };

  render() {
    return (
      <div className="chat-support">
        <div className="chat-header">Chat Support</div>
        <div className="chat-messages">{this.renderMessages()}</div>
        <form onSubmit={this.handleSubmit} className="chat-input-form">
          <input
            type="text"
            placeholder="Type your message..."
            value={this.state.newMessage}
            onChange={this.handleInputChange}
            className="chat-input"
          />
          
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ChatSupport;
