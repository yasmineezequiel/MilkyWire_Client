import React, { Component } from 'react'
import { fetchPosts } from '../modules/requestPosts'
import { Message, Header } from 'semantic-ui-react'

class PostsList extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetchPosts()
      .then(result => {
        this.setState({
          posts: result.posts
        })
      })
  }

  render() {
    let renderPostsList
    const postData = this.state.posts
    let message

    if (postData.length > 0) {
      renderPostsList = postData.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        )
      })
    } else {
      message = (
        <Message style={{ color: 'red' }}>
          <Header
            as='p'
            id="message"
            style={{ color: 'green' }}>
            There are no posts
          </Header>
        </Message>
      )
    }
    return (
      <>
        {renderPostsList &&
          <div id="list">
            {renderPostsList}
          </div>}
        {message}
      </>
    )
  }
}
export default PostsList