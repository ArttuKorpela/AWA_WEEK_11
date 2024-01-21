import React from 'react'

export function MyHOC({Component, name}) {
  return (
    <div className='wrapper'>{<Component name={name}/>}</div>
  )
}


