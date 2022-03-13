import React, { useEffect, useState } from "react";

const SearchUser = ({ onChangeUser }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    onChangeUser(user);
  }, [user]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={user} onChange={(e) => setUser(e.target.value)} />

        <button onClick={() => console.log("clieck")}>Search</button>
      </form>
    </>
  );
};

export default SearchUser;
