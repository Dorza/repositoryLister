import React,{Fragment} from "react";
import PropTypes from "prop-types";
import { dateFormat } from "../../../lib/dateTime";
import { Pagination } from "../../2.compounds";

const RepoPanel = props => {
  const { userRepos, handlePrev, handleNext} = props;

  return (
    <Fragment>

      <h3 className="u-title-spacing">Found repositories</h3>
      
      <Pagination handlePrev={handlePrev} handleNext={handleNext} />

      <div className="c-panel-wrapper">
        {
          userRepos.map(userRepo => (
            <div className="c-panel" key={userRepo.id}>
              <h2 className="c-panel__header">{userRepo.name}</h2>
              <ul className="c-panel__items">
                <li className="c-panel__item c-panel__item--description" title="Description">{userRepo.description === null ? "No description found" : userRepo.description}</li>
                <li className="c-panel__item c-panel__item--stars" title="Stars">{userRepo.stars}</li>
                <li className="c-panel__item c-panel__item--created" title="Created">{dateFormat(userRepo.created)}</li>
                <li className="c-panel__item c-panel__item--updated" title="Last updated">{dateFormat(userRepo.updated)}</li>
                <li className="c-panel__item c-panel__item--branch" title="Default branch">{userRepo.defaultBranch}</li>
                <li className="c-panel__item c-panel__item--view" title="View repo on GitHub">
                  <a className="c-btn c-btn--secondary c-btn--small" href={userRepo.url} target="_blank" rel="noopener noreferrer">View repo</a>
                </li>
              </ul>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
};

RepoPanel.propTypes = {
  userRepos: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default RepoPanel;
