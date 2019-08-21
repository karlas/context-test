import React from 'react'
import { Consumer } from '../context'

class People extends React.Component{
  renderContent(people){
    return (
      <div>
        <p>Hello people!</p>
        <p>{ people || 'loading people...' }</p>
      </div>
    )
  }
  render(){
    return (
      <Consumer>
        { ({ getPeople }) => this.renderContent(getPeople()) }
      </Consumer>
    )
  }
}

export default People
