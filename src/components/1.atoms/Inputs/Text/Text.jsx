import React from "react";
import PropTypes from "prop-types";

const InputText = props => {
  const { type, onChange } = props;

  return <input type={type} onChange={onChange} {...props} />;
};

InputText.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputText;
