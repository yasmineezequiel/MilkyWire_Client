import React, { Component } from 'react'
import CreatePost from './components/CreatePost'
import PostsList from './components/PostsList'
import EditPost from './components/EditPost'


class App extends Component {
  render() {
    return (
      <div>
        <PostsList/>
        <CreatePost/>
        <EditPost/>
      </div>
    )
  }
}

export default App;