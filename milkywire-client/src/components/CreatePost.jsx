import React, { Component } from 'react'
import { submitPost } from '../modules/requestPosts'
import { Form, Button, Container, FormField } from 'semantic-ui-react'

class CreatePost extends Component {
  state = {
  title: '',
  text: '',
  renderPostForm: false
}

renderForm = () => {
  this.setState({
  renderPostForm: !this.state.renderPostForm
})
}
inputHandler = (e) => {
  this.setState({
  [e.target.name]:e.target.value
  })
}
submitPostHandler = async() => {
  const { title, text } = this.setState
  let response = await submitPost(title, text)

    if (response.status === 200) {
    this.setState({
    responseMessage: response.data.message
    })
    } else {
    this.setState({
    responseMessage: response.data.error
    })
  }
}

render() {
  let postForm
  let responseMessage

    if (this.state.responseMessage) {
      responseMessage =
      <p id= "message">
        {this.state.responseMessage}
      </p>
    }

    if (this.state.renderPostForm) {
    postForm = (
    <>
      <Container>
        <Form id="post-form">
        <Form.Field>
          <input name="title" id="title-input" placeholder="Title" onBlur={this.inputHandler} />
        </Form.Field>
        <FormField>
          <input name="text" id="text-input" placeholder="Text" onBlur={this.inputHandler} />
        </FormField>
        <FormField>
          <Button id="submit-post" onClick={this.submitPostHandler.bind(this)}>Submit Post</Button>
          <Button id="cancel-post" onClick={this.renderForm}>Cancel</Button>
        </FormField>
        </Form>
      </Container>
    </>
    )
    } else {
    postForm = (
      <Button onClick={this.renderForm} id="create-post">Write Post</Button>
    )
  }
  return(
    <>
    {postForm}
    {responseMessage}
    </>
    )
  }
}

export default CreatePost