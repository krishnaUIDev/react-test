import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string.isRequired,
  handleUpdateMessage: PropTypes.func.isRequired,
};

const Message = ({ message, handleUpdateMessage }) => (
  <h1
    onClick={() => handleUpdateMessage()}
    role="presentation"
    onKeyDown={() => { }}
    data-id='message'
  >
    {message}
  </h1>
);

Message.displayName = 'Message';

Message.propTypes = propTypes;
export default Message;
