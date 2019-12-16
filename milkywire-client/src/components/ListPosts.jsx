import React, { Component } from 'react';
import { fetchPosts } from '../modules/requestPosts';
import { Grid, Container } from 'semantic-ui-react'
import SpecificPost from './SpecificPost'
import '../css/list-posts.css'

class ListPosts extends Component {
  state = {
    posts: [],
    errorMessage: null,
    showPost: false,
    showPostId: null
  }

  setErrorMessage = (error) => {
    this.setState({
      errorMessage: error
    })
  }

  componentDidMount() {
    this.fetchPosts()
  }

  async fetchPosts() {
    let response = await fetchPosts();

    if (response.status === 400) {
      this.setErrorMessage(response.errorMessage)
    } else {
      this.setState({
        posts: response
      })
    }
  }

  showSpecificPostHandler = (postId) => {
    this.setState({
      showPost: true,
      showPostId: postId
    })
  }

  render() {
    const posts = this.state.posts
    let showPost = this.state.showPost
    let postList
    let errorMessage
    let specificPost

    if (this.state.errorMessage) {
      errorMessage = <p id="error">{this.state.errorMessage}</p>
    }

    if (showPost === false) {
      postList = (
        <Grid.Row>
          {posts.map(post => {
            return <Grid.Column onClick={() => { this.showSpecificPostHandler(post.id) }} id={`post_${post.id}`} key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
            </Grid.Column>
          })}
        </Grid.Row>
      )
    }

    if (showPost === true) {
      specificPost = <SpecificPost
        postId={this.state.showPostId}
        renderErrorMessage={this.setErrorMessage}
      />
    }

    return (
      <>
        <h1>Milkywire</h1>
        <hr></hr>
        <Container className="list-posts">
          <h2>Imapactores POST</h2>
          <Grid centered container columns={3} className="latest-posts">
            {postList}
            {errorMessage}
            {specificPost}
          </Grid>
        </Container>
      </>
    )
  }
}

export default ListPosts