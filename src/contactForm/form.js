import React from 'react'
import Button from '../button/button'
import './form.css'
import { MdCall } from 'react-icons/md'
import { MdMessage } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai'
 import call from '../caller.jpg';

export default function Form() {
  return (
    <section className='form_container'>
      <div className='form_left'>  
        <div className='topbtn'>
        <Button text="Via Support Chat" icon={ <MdMessage  fontSize="large"/>} />
        <Button text="Via Call" icon={<MdCall  fontSize="large" />} />
        </div> 
         <Button isOutline={true} text="Via Email" icon={<AiFillMail fontSize="large" />} />
         <form>   
          <div className='formdesign'>
          <label>Name</label>
          <input type="text" placeholder='Enter your name' name="name"/>
    </div>
     <div className='formdesign'>
          <label>Email</label>
          <input type="Email" placeholder='Enter your email' name="email"/>
    </div>
     <div className='formdesign'>
          <label>Text</label>
          <textarea name="name"/>
    </div>
    </form>
    <div>

    </div>
      <div className='submitbtn'>
      <Button text="Submit"/>
      </div>
      </div>
      
       <div className='form_right'>
          <img style={{marginTop: '20px'}} src={call} alt="contactus" />
        </div> 
    </section>
  )
}
