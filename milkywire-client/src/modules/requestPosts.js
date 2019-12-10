import axios from 'axios';

const apiUrl = 'http://api.example.com'

const fetchPosts = async () => {
  let response = await axios.get(apiUrl + 'posts')
  return response.data.posts
}

const submitPost = async (title, text) => {
  try {
    let postParams
    postParams = {
      title: title,
      text: text
    }
    
    let response = await axios.post(apiUrl + 'posts',
      {
        post: postParams
      }
    )

    return {
      message: response.data.message,
    }
  } catch(error) {
    return {
      error: error.response.data.error_message || error.message 
    }
  }
}
    
const editPost = async (title, text, postId) => {
  try {
    let postParams
    postParams = {
      title: title,
      text: text
    }

    let response = await axios.put(apiUrl + `posts/${postId}`,
      {
        post: postParams
      }
    )

    return {
      message: response.data.message,
    }
  } catch(error) {
    return {
      error: error.response.data.error_message || error.message 
    }
  }
}

const getSinglePost = async (postId) => {
  try {
    let response = await axios.get(apiUrl + `posts/${postId}`)
    return {
      post: response.data.post
    }
  } catch(error) {
    return {
      error: error.response.data.error_message
    }
  }
}

export { fetchPosts, submitPost, getSinglePost, editPost }