import React, { Component } from 'react'
import CreatePost from './components/CreatePost'
import PostsList from './components/PostsList'
import EditPost from './components/EditPost'
import SinglePost from './components/SinglePost'


class App extends Component {
  render() {
    return (
      <div>
        <PostsList/>
        <CreatePost/>
        <SinglePost/>
        <EditPost/>
      </div>
    )
  }
}

export default App;