import React from 'react';
import Navbar from './Navbar';
export default function Skills() {
    return (
        <div className='box'>
            <Navbar/>
            <div className='box-md'>
            <h4>
                I enjoy diving into and learning new things, Here's a list of technologies I've worked with
            </h4>
            
            <ul className='box-items'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>NODE.JS</li>
                <li>MYSQL</li>
                <li>JAVA</li>     
           </ul>
          </div>
            
        </div>
    )
}