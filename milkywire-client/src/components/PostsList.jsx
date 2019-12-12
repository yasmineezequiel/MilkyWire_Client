import React, { Component } from 'react'
import { fetchPosts } from '../modules/requestPosts'
import { Message, Header, Grid } from 'semantic-ui-react'
import PostCard from './PostCard'

class PostsList extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    let response = await fetchPosts()
    this.setPosts(response)
  }

  setPosts = (posts) => {
    this.setState({
      posts: posts
    })
  }
  
  render() {
    let renderPostsList
    const postData = this.state.posts
    let message
    if (postData.length > 0) {
      renderPostsList = postData.reverse().map(post => {
        return <PostCard key={post.id} post={post} linked />
      })
    } 
    else {
      message = (
        <Message style={{ color: "red" }}>
          <Header as="p" id="message" style={{ color: "#4C5966" }}>
            There are no posts
          </Header>
        </Message>
      )
    }
    return (
      <>
        {message}
        {renderPostsList && 
        <Grid columns={3} id="list">
          <Grid.Row>
            {renderPostsList}
          </Grid.Row>
        </Grid>}
      </>
    )
  }
}

export default PostsList