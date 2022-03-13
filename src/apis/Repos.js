import { Octokit } from "octokit";

const octokit = new Octokit();

const getReposByUsername = async (username) => {
  try {
    const result = await octokit.request(`GET /users/${username}/repos`);
    // const user_data = result.data;
    console.log(result);
    return result;
    // const obj = {
    //   username: user_data.login,
    //   id: user_data.id,
    //   name: user_data.name,
    //   bio: user_data.bio,
    //   joined_at: user_data.created_at,
    //   avatar_url: user_data.avatar_url,
    //   follower: user_data.followers,
    //   following: user_data.following,
    //   twitter: user_data.twitter_username,
    //   bio: user_data.bio,
    //   company: user_data.company,
    //   blog: user_data.blog,
    //   email: user_data.email,
    // };

    // return obj;
  } catch (err) {
    return err.message;
  }
};

export { getReposByUsername };
