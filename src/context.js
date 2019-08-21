import React, { Component, createContext } from 'react'

export const Context = createContext()
export const Consumer = Context.Consumer

const fetchPeople = async () => {
  console.log('Fetching people from API...')
  const response = await window.fetch('https://swapi.co/api/people/1')
  const data = await response.json()
  return data.name
}

const fetchPlanet = async () => {
  console.log('Fetching planet from API...')
  const response = await window.fetch('https://swapi.co/api/planets/3')
  const data = await response.json()
  return data.name
}

export class Provider extends Component{
  state = { planet : null, people : null }
  componentDidMount(){
    console.log('Context provider mounted')
  }
  componentWillUnmount(){
    console.log('Context provider unmounted')
  }
  getPlanet(){
    const { planet } = this.state
    if (!planet){
      setTimeout(async () => {
        const planet = await fetchPlanet()
        this.setState({ planet })
      }, 0)
    }
    return planet
  }
  getPeople(){
    const { people } = this.state
    if (!people){
      setTimeout(async () => {
        const people = await fetchPeople()
        this.setState({ people })
      }, 0)
    }
    return people
  }
  render(){
    const value = {
      getPeople : () => this.getPeople(),
      getPlanet : () => this.getPlanet(),
    }
    return (
      <Context.Provider value={ value }>
        { this.props.children }
      </Context.Provider>
    )
  }
}
