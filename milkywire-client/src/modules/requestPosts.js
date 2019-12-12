import axios from 'axios';
const apiURL = 'https://api.example.com'

const submitPost = async (title, text) => {
  try {
    let response = await axios.post(apiURL + 'post',
    { post:
    {
      title: title,
      text: text
    }
  }
)
  return {
    message: response.data.message,
    }
  } catch(error) {
    return {
      error: error.response.data.error_message
    }
  }
}

const fetchPosts = async () => {
  let response = await axios.get(apiURL + 'post_list')
  return response.data.post_list
}

export { submitPost, fetchPosts }