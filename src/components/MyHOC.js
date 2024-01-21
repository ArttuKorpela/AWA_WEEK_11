import React from 'react'

export const MyHOC = ({Component, name}) => {
  return (
    <div className='wrapper'>{<Component name={name}/>}</div>
  )
}


