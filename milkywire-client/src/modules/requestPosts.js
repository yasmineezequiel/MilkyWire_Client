import axios from 'axios';

const apiURL = 'https://api.example.com/'

const fetchPosts = async () => {
  let response = await axios.get(apiURL + 'posts')
  return response.data.posts
}

const submitPost = async (title, text) => {
  let response = await axios.post(apiURL + 'posts') 
  return response.data.message
}

export { fetchPosts, submitPost }