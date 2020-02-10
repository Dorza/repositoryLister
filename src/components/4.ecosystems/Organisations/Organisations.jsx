import React, { Fragment, useState } from "react";
import { Spinner} from "../../1.atoms";
import { Search } from "../../2.compounds";
import { OrgPanel } from "../../3.organisms";
import ajax from "../../../lib/ajax";
import { doze } from "../../../lib/doze"
import { useToasts } from "react-toast-notifications"

const Organisations = () => {

  const [username, setUsername] = useState("Wesbos");
  const [orgRepos, setOrgRepos] = useState();
  const [loading, setLoading] =  useState(false);
  let toastMessage = "";
  const { addToast } = useToasts()


  const handleOnClick = async () => {
    
    const url = `/users/${username}/orgs`;

    setLoading(true);
    
    await doze(3000);

    await ajax.get(url).then(response => {
      const repos = response.data.map(repo => ({
        id: repo.id,
        name: repo.login,
        avatar: repo.avatar_url,
        url: repo.url

      }))

      if(repos.length > 0) {

        setOrgRepos(repos);

      } else {
        
        toastMessage = "Found 0 organisations this user is associated with";

        addToast(toastMessage, { appearance: 'info', autoDismiss: false })
      }

      setLoading(false);

    }).catch(err => {
      setLoading(false);

      const { response: { status }} = err;

      if(status === 404) {
        toastMessage = "Sorry no organisations for that user could be found, please try another username";
        console.error(err.response);
      }
      else {
        toastMessage = "An error occurred while retrieving data, please try again";
      }
      addToast(toastMessage, { appearance: 'error', autoDismiss: false })
    });    
  };

  const handleOnChange = e => setUsername(e.target.value);

  return (
        <Fragment>
          <h1 className="u-title-spacing">User organisations</h1>
          <Search
            btnText="Get Repos"
            defaultValue={username}
            onClick={handleOnClick}
            onChange={handleOnChange}
          />
        {loading && <Spinner />}
        {orgRepos && <OrgPanel orgRepos={orgRepos} />}
        </Fragment>
  );
}

export default Organisations;
