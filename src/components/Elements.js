import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const Elements = ({ elements }) => (
  <ul>
    {elements.map(element => (
      <li key={element.id} className="element">
        {element.name}
      </li>
    ))}
  </ul>
);

Elements.propTypes = propTypes;
export default Elements;
