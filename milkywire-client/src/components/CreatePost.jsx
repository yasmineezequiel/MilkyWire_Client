import React, { Component } from 'react'
import CreatePostForm from './CreatePostForm'
import { Header } from 'semantic-ui-react';
import '../css/create-post.css'

class CreatePost extends Component {
  state = {
    message: null,
    error: false
  }

  submitPostHandler = async (event) => {
    event.preventDefault()
    let { title, text } = event.target 
    let response = await (title.value, text.value)

    if (response.message) {
      this.setState({
        message: response.message
      })
    } else {
      this.setState({
        message: response.error,
        error: true
      })
    }
  }

  render() {
    let messages
    let { message, error } = this.state

    if (message) {
      messages = (
        // <Message className="create-message" size="small" style={{ color: error ? 'red' : 'green' }}>
          <Header
          as='p'
          id="response-message"
          style={{ color: error ? 'red' : 'green' }}>
            {message}
          </Header>
        // </Message>
      )
    }

    return (
      <div className="create-wrapper">
        <Header as='h1' className="create-post">Create New Post</Header>
        <Header sub>Please fill Title and Text</Header>
        {messages}
        <CreatePostForm
        submitPostHandler={this.submitPostHandler}
        />
      </div>
    )
  }
}
export default CreatePost