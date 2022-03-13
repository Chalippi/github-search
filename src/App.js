import { useState, createContext, useContext, useEffect } from "react";
import SearchUser from "./components/SearchUser";
import { getUser } from "./apis/Users";
import { getReposByUsername } from "./apis/Repos";
import { Card, Container } from "react-bootstrap";

function App() {
  //Create user to be used by RepoList
  const UserContext = createContext();

  //to save state of username from component SearchUser
  const [userDetail, setUserDetail] = useState(null);

  //to handle change on SearchUser
  const onChangeUser = async (username) => {
    const user = await getUser(username);
    console.log(user);
    setUserDetail(user);
  };

  return (
    <div
      className="bg-dark p-3"
      style={{
        height: "100vh",
      }}
    >
      <SearchUser onChangeUser={onChangeUser} />
      <UserContext.Provider value={userDetail}></UserContext.Provider>
    </div>
  );
}

export default App;
