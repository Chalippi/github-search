import { Octokit } from "octokit";

const octokit = new Octokit();

const getReposByUsername = async (username) => {
  try {
    const result = await octokit.request(`GET /users/${username}/repos`);
    return result.data;
  } catch (err) {
    return err.message;
  }
};

export { getReposByUsername };
