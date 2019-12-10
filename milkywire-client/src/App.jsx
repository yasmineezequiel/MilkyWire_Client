import React, { Component } from 'react'
import CreatePost from './components/CreatePost'
import PostsList from './components/PostsList'


class App extends Component {
  render() {
    return (
      <div>
        <PostsList/>
        <CreatePost/>
      </div>
    )
  }
}

export default App;