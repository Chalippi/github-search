import { useState, createContext, useContext } from "react";
import SearchUser from "./components/SearchUser";
import { getUser } from "./apis/Users";
import { getReposByUsername } from "./apis/Repos";

function App() {
  //Create user to be used by Repos
  const UserContext = createContext();

  //to save state of username from component SearchUser
  const [user, setUser] = useState("");

  //to handle change on SearchUser
  const onChangeUser = async (username) => setUser(username);

  return (
    <UserContext.Provider value={user}>
      <SearchUser onChangeUser={onChangeUser} />
    </UserContext.Provider>
  );
}

export default App;
