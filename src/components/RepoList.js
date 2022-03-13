import React from "react";
import UserInfo from "../components/UserInfo";
import ErrorMessage from "./ErrorMessage";
import LoadingIndicator from "./LoadingIndicator";
import CardList from "./CardList";
import { isEmptyObject } from "../utils/utils";

const RepoList = ({ user, repo }) => {
  //check if string then error
  return !user.error && !isEmptyObject(user) ? (
    <div className="d-flex flex-row align-items-center justify-content-around mt-5">
      <CardList data={repo} />
      <UserInfo user={user} />
    </div>
  ) : user.error ? (
    <ErrorMessage error={user.error} />
  ) : null;
};

export default RepoList;
