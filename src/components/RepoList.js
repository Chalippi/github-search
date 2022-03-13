import React from "react";
import UserInfo from "../components/UserInfo";

const RepoList = ({ user, repo }) => {
  return (
    <div className>
      <UserInfo user={user} />
    </div>
  );
};

export default RepoList;
