import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const CreatePostForm = (props) => {
  return (
    <>
    <Form id="create-post-form" onSubmit={(event) => props.submitPostHandler(event)}>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          id="create-title"
          label='Title'
          placeholder='Add title (maximum 255 characters)'
          name="title"
        />
      </Form.Group>
      <Form.TextArea
        id='create-text'
        label='Text'
        placeholder='Add text (maximum 5000 characters)'
        name="text"
      />
      <Button
      id="submit-create-form"
      type="submit"
      >
        Submit
      </Button>
    </Form>
    </>
  )
}
export default CreatePostForm