import React from 'react'
import './button.css';


export default function Button(props) {
  const {icon, text,isOutline} = props;

  return (
    <div className='button-container'>
      <button className={`btn  ${isOutline ? 'outline' : ''}`}>
        {icon}
        {text}
      </button>
    </div>
  )
}
