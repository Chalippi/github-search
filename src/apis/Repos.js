import { Octokit } from "octokit";

const octokit = new Octokit();

const getReposByUsername = async (username, per_page) => {
  try {
    const result = await octokit.paginate(`GET /users/${username}/repos`, {
      per_page: per_page,
    });
    return result.data;
  } catch (err) {
    return { error: err.message };
  }
};

export { getReposByUsername };
