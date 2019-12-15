import React, { Component } from 'react'
import { Header, Message } from 'semantic-ui-react'
import { getSinglePost } from '../modules/requestPosts'
import '../css/single-post.css'
import PostCard from './PostCard';


class SinglePost extends Component {

  state = {
    post: null,
    message: null,
    error: false
  }

  async componentDidMount() {
    let response = await getSinglePost(this.props.match.params.id)

    if (response.post) {
      this.setState({
        post: response.post
      })
    } else {
      this.setState({
        message: response.error,
        error: true
      })
    }
  }

  render() {
    let { post, message, error } = this.state
    let showSinglePost, messages

    if (message) {
      messages = (
        <Message className="create-message" size="small" style={{ color: error ? 'red' : 'green' }}>
          <Header
            as='p'
            id="response-message"
            style={{ color: error ? 'red' : 'green' }}>
            {message}
          </Header>
        </Message>
      )
    }

    if (post) {
      showSinglePost = (
        <PostCard
          post={post}
          linked={false}
        />
      )
    }

    return (
      <div>
        {messages}
        {showSinglePost}
      </div>
    )
  }
}

export default SinglePost