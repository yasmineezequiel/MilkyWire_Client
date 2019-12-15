import React, { Component } from 'react';
import { fetchPosts } from '../modules/requestPosts';
import { Message, Header } from 'semantic-ui-react'
import '../css/list-posts.css'

class ListPosts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetchPosts()
      .then(result => {
        this.setState({
          posts: result
        })
      })
  }

  render() {
    let renderListPosts
    const postData = this.state.posts
    let message

    if (postData.length > 0) {
      renderListPosts = postData.map(post => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
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
      <h1>Milkywire</h1>
        {renderListPosts &&
          <div id="list-posts">
            {renderListPosts}
          </div>
        }
        {message}
      </>
    )
  }
}
export default ListPosts;