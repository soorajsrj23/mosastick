import React, { Children } from 'react'

const Helmet=(props)=> {
    document.title="Mosastick Technologies-" +props.title;
  return (
    <div>{props.children}</div>
  )
}

export default Helmet