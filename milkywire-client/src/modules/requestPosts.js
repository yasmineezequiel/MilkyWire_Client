import axios from 'axios';
const apiURL = 'https://api.example.com/'

const submitPost = async (title, text) => {
try {
let response = await axios.post(apiURL + 'post',
  {
    title: title,
    text: text
  }
)
  return response
    } catch (error) {
  return error.message
  }
}

export { submitPost }