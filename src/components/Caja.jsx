import React from 'react'
import './caja.css'

export const Caja = (props) => {
  return (
    <div className='card' > {props.children}</div>
  )
}
