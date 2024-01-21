import React from 'react'

function MyHOC({Component, name}) {
  return (
    <div className='wrapper'>{<Component name={name}/>}</div>
  )
}

export default MyHOC
