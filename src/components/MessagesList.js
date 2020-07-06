import React from "react";
import PropTypes from "prop-types";
import Messages from "./Message";

const MessageList = ({ messages }) => {
  return (
    <section id="message-list">
      <ul>
        {messages.map((message) => (
          <Messages key={message.id} {...message} />
        ))}
      </ul>
    </section>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MessageList;
