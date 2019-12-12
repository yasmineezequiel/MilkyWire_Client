import axios from 'axios';
const apiURL = 'https://api.example.com/'

const submitPost = async () => {
  let response = await axios.post(apiURL + 'post')
  return response.data.post
}

const fetchPosts = async () => {
    let response = await axios.get(apiURL + 'posts')
    return response.data.posts
}

export { submitPost, fetchPosts }