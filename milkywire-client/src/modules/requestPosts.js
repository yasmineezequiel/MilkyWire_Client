const fetchPosts = async () => {
  let response = await get('posts')
  return response.data.posts
}

const submitPost = async (title, text) => {
  try {
    let response = await post('posts',
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

export { fetchPosts, submitPost }