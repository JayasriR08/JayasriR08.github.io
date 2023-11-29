import React from 'react'
import './App.css'

export default function Header() {
    return (
        <div className='navbar'>
            <h1 className='h1'>JAYASRI RAVI</h1>
            <div>
                <nav className='nav'>
                    <ul className='ul1'>
                        <li>
                        <a href="/#Home">Home</a>
                        </li>
                        <li>
                        <a href="/#About">About</a>
                        </li>
                        <li>
                        <a href="/#Skill">Skill</a>
                        </li>
                        <li>
                        <a href="/#Education">Education</a>
                        </li>
                        <li>
                        <a href="/#Service">Service</a>
                        </li>
                        <li>
                        <a href="/#Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}