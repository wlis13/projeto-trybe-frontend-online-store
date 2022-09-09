import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      testId,
      id,
      text,
      name,
      type,
      onChange,
      value,
      checked,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { text }
        <input
          data-testid={ testId }
          id={ id }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  testId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  checked: false,
  value: '',
  text: '',
};

export default Input;
