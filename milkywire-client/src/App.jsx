import React, { Component } from 'react'
import CreatePost from './components/CreatePost'
import ListPosts from './components/ListPosts'

class App extends Component {
  render() {
    return (
      <div>
        <CreatePost/>
        <ListPosts/>
      </div>
    )
  }
}

export default App