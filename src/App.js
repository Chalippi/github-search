import { useState, useEffect } from "react";
import SearchUser from "./components/SearchUser";
import { getUser } from "./apis/Users";
import { getReposByUsername } from "./apis/Repos";
import RepoList from "./components/RepoList";

function App() {
  //to save state of username from component SearchUser
  const [userDetail, setUserDetail] = useState(null);
  const [repoList, setRepoList] = useState([]);

  //to handle change on SearchUser
  const onChangeUser = async (username) => {
    const user = await getUser(username);
    setUserDetail(user);
  };

  //after state userDetail updates, get the repo
  useEffect(() => {
    if (userDetail) {
      async function setRepoToState() {
        const repo = await getReposByUsername(userDetail.login);
        setRepoList(repo);
      }
      setRepoToState();
    }
  }, [userDetail]);

  return (
    <div className="p-5">
      <SearchUser onChangeUser={onChangeUser} />
      <RepoList user={userDetail} repo={repoList} />
    </div>
  );
}

export default App;
