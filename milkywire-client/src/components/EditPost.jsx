import React, { Component } from "react"
import { Message, Header } from "semantic-ui-react"
import { submitPost, editPost } from "../modules/requestPosts"
import PostForm from "./CreatePostForm"
import "../css/create-post.css"

class EditPost extends Component {
  state = {
    message: null,
    error: false
  }

  submitPostHandler = async event => {
    event.preventDefault()
    let { title, text } = event.target
    let response

    if (this.props.edit) {
      response = await editPost(
        title.value,
        text.value,
        this.props.postId
      )
    } else {
      response = await submitPost(
        title.value,
        text.value,
      )
    }

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
    let edit = this.props.edit
    let header = edit
      ? "Make some changes to your post!"
      : "Create Your Post"
    let subHeader = edit
      ? "All input fields are mandatory in order to update your post."
      : "All input fields are mandatory in order to submit a post."
    let messages
    let { message, error } = this.state

    if (message) {
      messages = (
          <Header
            as="p"
            id="response-message"
            style={{ color: error ? "red" : "green" }}
          >
            {message}
          </Header>
      );
    }

    return (
      <div className="create-wrapper">
        <Header as="h1" className={edit ? "edit-post" : "create-post"}>
          {header}
        </Header>
        <Header sub>{subHeader}.</Header>
        {messages}
        <PostForm
          submitPostHandler={this.submitPostHandler}
          edit={edit}
        />
      </div>
    );
  }
}

export default EditPost