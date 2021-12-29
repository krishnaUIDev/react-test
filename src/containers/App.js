import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actionMessage from '../actions/message-actions';
import Message from '../components/Message';
import Elements from '../components/Elements';

const propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  message: PropTypes.string.isRequired,
  updateMessage: PropTypes.func.isRequired,
};

// The component receives "elements" from Props
const App = ({ elements, message, updateMessage }) => (
  <div>
    <Message
      message={message}
      handleUpdateMessage={updateMessage}
    />
    <Elements
      elements={elements}
    />
  </div>
);

// State -> Props
const mapStateToProps = state => (
  {
    elements: state.elements,
    message: state.message,
  }
);

// Functions -> Props
const mapDispatchToProps = dispatch => (
  {
    updateMessage() {
      dispatch(actionMessage());
    },
  }
);

App.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(App);
