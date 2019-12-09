import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const CreatePostForm = (props) => {
  return (
    <>
    <Form id="create-post-form" onSubmit={(event) => props.submitPostHandler(event)}>
      <Form.Group widths='equal'>
        <Form.Input
        label='Title'
        fluid
        id="create-title"
        lable='Title'
        placeholder='Add title (maximum 255 characters)'
        name="title"
        />
      </Form.Group>
      <Form.TextArea
      label='Text'
      id='create-text'
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