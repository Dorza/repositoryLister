import React from "react";
import PropTypes from "prop-types";


const Spinner = props => {
  const { text } = props;

  return <p className="c-spinner">{text}</p>
};

Spinner.defaultProps = {
    text: "Loading...",
}

Spinner.propTypes = {
    text: PropTypes.string
};

export default Spinner;
