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
  getPlanet(){
    const { planet } = this.state
    if (!planet){
      setTimeout(async () => {
        const data = await fetchPlanet()
        this.setState({ planet : data })
      }, 0)
    }
    return planet
  }
  getPeople(){
    const { people } = this.state
    if (!people){
      setTimeout(async () => {
        const data = await fetchPeople()
        this.setState({ people : data })
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
