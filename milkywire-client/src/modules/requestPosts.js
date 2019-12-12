import axios from 'axios';

const apiURL = 'https://api.example.com'

const fetchPosts = async () => {
  let response = await axios.get(apiURL + 'post_list')
  return response.data.post_list
}

const submitPost = async (title, text) => {
  let response = await axios.post(apiURL + 'post') 
  return response.data.message
}

export { fetchPosts, submitPost }