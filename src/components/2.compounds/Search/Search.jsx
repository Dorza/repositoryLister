import React from "react";
import PropTypes from "prop-types";

import { Button, InputText } from "../../1.atoms";

const Search = props => {
  const { btnText, defaultValue, onClick, onChange, classNames} = props;

  return (
    <form className={`c-search ${classNames}`}>
      <InputText className="c-search__input" type="text" onChange={onChange} value={defaultValue} />
      <Button type="submit" text={btnText} onClick={onClick} />
    </form>
  );
};

Search.defaultProps = {
  classNames: ""
}

Search.propTypes = {
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  classNames: PropTypes.string
};

export default Search;
