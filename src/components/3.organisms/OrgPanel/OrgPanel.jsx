import React,{Fragment } from "react";
import PropTypes from "prop-types";

const OrgPanel = props => {
  const { orgRepos } = props;

  const block = "c-panel";
  return (
    <Fragment>

      <h3 className="u-title-spacing">Found Organisations</h3>
      <div className={`${block}-wrapper`}>
        {
          orgRepos.map(orgRepo => (
            <div className={`${block}`} key={orgRepo.id}>
              <h2 className={`${block}__header`}>
                <img className={`${block}__avatar`} src={orgRepo.avatar} alt={`${orgRepo.name} repository avatar`} width="20px" />
                {orgRepo.name}
              </h2>
              <ul className={`${block}__items`}>
                <li className={`${block}__item ${block}__item--view`}>
                  <a className="c-btn c-btn--secondary c-btn--small" href={orgRepo.url} target="_blank" rel="noopener noreferrer">View repo</a></li>
              </ul>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
};

OrgPanel.propTypes = {
  orgRepos: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default OrgPanel;
