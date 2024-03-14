import React from 'react';
import Navbar from './Navbar';

const Projects =()=> {
    return (
        <div className='box'>
            <Navbar/>
        <div className='d-flex box-md'>
            <div className='flex-items'>
                <h4>Emotion Based Song System</h4>
                <p>This project is created to build an web based music application that allows users to capture their face and get recommendations of songs according to their current emotional state with the help of
                    Machine learning.</p>
            </div>
            <div className='flex-items'>
                <h4>Visualization Of Sorting Algorithms</h4>
                <p>This project is created to visualize how various sorting algorithms work. The website's User Interface (UI) created using HTML , CSS
                    and the implementation of animation and core functionality was done using Javascript.
                </p>
            </div>

            <div className='flex-items'>
                <h4>Wedding Planner</h4>
                <p>This project is created to offer the best wedding planning & event management services.The website's User Interface (UI) created using HTML , CSS
                    and the implementation of animation and core functionality was done using Javascript.</p>
            </div>
        </div>
         

        </div>
    )
};

export default Projects;