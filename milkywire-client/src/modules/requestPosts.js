import axios from 'axios';
const apiURL = 'https://api.example.com/'

const submitPost = async () => {
  try {
    let response = await axios.post(apiURL + 'post' + 'successful_message')
    return response
  } catch(error) {
    return {
      error_message: error.message.post
    }
  }
}

const fetchPosts = async () => {
  let response = await axios.get(apiURL + 'posts')
  return response.data.posts
}

export { submitPost, fetchPosts }