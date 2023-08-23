import React from 'react'

const Card = (props) => {
  return (
    <div className="card rounded overflow-hidden position-relative h-100 mx-2 border-0 bg-white shadow-sm">    
             {props.children}
    </div>
  )
}

export default Card