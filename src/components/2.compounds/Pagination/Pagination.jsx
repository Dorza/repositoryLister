import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../1.atoms";

const Pagination = props => {

    const { handlePrev, handleNext } = props;

    return (
      <div className="c-pagination">
         <Button size="small" className="c-pagination__btn c-pagination__btn--prev" onClick={handlePrev} text="Previous" />
         <Button size="small" className="c-pagination__btn c-pagination__btn--next" onClick={handleNext} text="Next"/>
      </div>
    )
}

Pagination.propTypes = {
    handlePrev: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,

};

export default Pagination;