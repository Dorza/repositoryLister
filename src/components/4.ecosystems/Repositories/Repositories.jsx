import React, { Fragment, useState } from "react";
import { Spinner} from "../../1.atoms";
import { Search } from "../../2.compounds";
import { RepoPanel } from "../../3.organisms";
import ajax from "../../../lib/ajax";
import { doze } from "../../../lib/doze"
import { useToasts } from "react-toast-notifications"

const Repositories = () => {

  const [username, setUsername] = useState("Wesbos");
  const [userRepos, setUserRepos] = useState();
  const [loading, setLoading] =  useState(false);
  const [page, setPage] = useState(1);
  let toastMessage = "";
  const { addToast } = useToasts()

const getApiData = async (showPage) => {

  const url = `/users/${username}/repos?page=1&per_page=10&page=${showPage}`;

  await ajax.get(url).then(response => {
    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      created: repo.created_at,
      updated: repo.updated_at,
      defaultBranch: repo.default_branch,
      description: repo.description,
      stars: repo.stargazers_count,
      url: repo.svn_url

    }))

    setUserRepos(repos);
    
  
  }).catch(err => {
  
    setLoading(false);

    const { response: { status }} = err;

    if(status === 404) {
      toastMessage = "Sorry no repositories for that user could be found, please try another username";
      console.error(err.response);
    }
    else {
      toastMessage = "An error occurred while retrieving data, please try again";
    }

    addToast(toastMessage, { appearance: 'error', autoDismiss: false })
  }); 
}
  const handleOnClick = async () => {

    await doze(0);    
    setLoading(true);
    getApiData(page);
    setLoading(false);

  };

  const handleOnChange = e => setUsername(e.target.value);

  const handlePrev = () => {
    const prevPage = page - 1 === 0 ? 1 : page - 1;
    setPage(prevPage);
    getApiData(prevPage);
  }

  const handleNext = () => {
    const nextPage = page + 1
    setPage(nextPage);
    getApiData(nextPage);
  }

  return (

        <Fragment>
    
          <h1 className="u-title-spacing">User repositories</h1>
    
          <Search
            btnText="Get Repos"
            defaultValue={username}
            onClick={handleOnClick}
            onChange={handleOnChange}
          />
    
        {loading && <Spinner />}
        {userRepos && <RepoPanel userRepos={userRepos} handlePrev={handlePrev} handleNext={handleNext} />}
    
        </Fragment>
  );
}

export default Repositories;
