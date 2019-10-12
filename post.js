import React from 'react'
import { View, Text } from 'react-native'
import post from './post_store'

class Post extends React.Component {
  constructor(props) { 
    super(props)
    this.state = post.store = { description: "a new idea", id: 2, user: null }
  }

  componentDidMount = async () => {
    const response = await api.getUser()
    const json = await response.json()
    this.setState({ user: json })
  }

  componentDidUpdate() {
    post.store = this.state
  }

  render() {
    const { id, description } = this.state
    return (
      <View> 
        <Text>User { id }</Text>
        <Text>{ description }</Text>
      </View>
    )
  }
}

export default Post
