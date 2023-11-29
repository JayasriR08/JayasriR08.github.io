import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='Footer'>
        <div className='icon'>
        <a href='https://www.linkedin.com/in/jayasri-ravi-ab568626a/' target='_blank'><img src='icons-linkedin.png' alt='linkedin' className='icons' style={{ width: 43 }}></img></a>
        <a href='https://github.com/JayasriR08' target='_blank'><img src='icons-github.png' alt='github' className='icons' style={{ width: 45 }}></img></a>                 
        </div>
        <div>
          <h2>&copy; {new Date().getFullYear()}, Made by Jayasri Ravi.</h2>
        </div>
    </div>
  )
}
