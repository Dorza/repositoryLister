import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = props => {
  const { text, size, styledAs, onClick, className } = props;

  const btnClass = classNames({
    "c-btn": true,
    "c-btn--primary": styledAs === "primary" ? true : false,
    "c-btn--secondary": styledAs === "secondary" ? true : false,
    "c-btn--tertiary": styledAs === "tertiary" ? true : false,
    "c-btn--small": size === "small" ? true : false
  });

  return (
    <button type="button" className={`${btnClass} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  styledAs: "primary",
  size: "normal",
  className: "",
};

Button.propTypes = {
  text: PropTypes.string,
  styledAs: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string

};

export default Button;
