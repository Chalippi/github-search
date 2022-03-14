import { Octokit } from "octokit";

const octokit = new Octokit();

const getReposByUsername = async (username, per_page, page) => {
  console.log(username, per_page, page);
  try {
    const result = await octokit.request(
      `GET /users/${username}/repos?per_page=${per_page}&page=${page}`
    );
    return result.data;
  } catch (err) {
    return { error: err.message };
  }
};

export { getReposByUsername };
