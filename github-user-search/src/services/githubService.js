import axios from 'axios';

// For advanced search using GitHub Search API
export const searchUsers = async (username, location, minRepos) => {
  let query = username ? `${username} in:login` : '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data.items;   // returns an array of matching users
}
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};