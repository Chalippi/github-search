import { Octokit } from "octokit";

const octokit = new Octokit();

const getUser = async (username) => {
  try {
    const result = await octokit.rest.users.getByUsername({ username });
    return result.data;
  } catch (err) {
    return err.message;
  }
};

export { getUser };
