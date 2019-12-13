import axios from 'axios';
const apiURL = 'https://api.example.com/'

const fetchPosts = async () => {
  let response = await axios.get(apiURL + 'posts')
  return response.data.posts
}

const submitPost = async (title, text, image) => {
try {
let response = await axios.post(apiURL + 'post',
  {
    title: title,
    text: text,
    image: image
  }
)
  return response
    } catch (error) {
  return error.response
  }
}

export { fetchPosts, submitPost }