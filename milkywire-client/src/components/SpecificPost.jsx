import React, { Component } from "react";
import { getSpecificPost } from '../modules/requestPosts'

class SpecificPost extends Component {

  state = {
    post: null
  }

  async componentDidMount() {
    let response = await getSpecificPost(this.props.postId)
    if (response.status === 200) {
      this.setState({
        post: response.data.post
      })
    } else {
      this.props.renderErrorMessage(response)
    }
  }

  render() {

    let specificPost
    const post = this.state.post
    if (post !== null) {
      specificPost = (
        <div id="specific-post">
          <p id="post-title">{post.title}</p>
          <p id="post-text">{post.text}</p>
        </div>
      )
    }
    return (
      <>
        {specificPost}
      </>
    );
  }
};

export default SpecificPost