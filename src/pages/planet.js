import React, { useContext } from 'react'
import { Context } from '../context'

const Planet = () => {
  const { getPlanet } = useContext(Context)
  return (
    <div>
      <p>Hello planet!</p>
      <p>{ getPlanet() || 'loading planet...' }</p>
    </div>
  )
}

export default Planet
