import React from 'react';
import Navbar from './Navbar';
import women from '../assets/working_women.jpg'


const Home = () => {
    return (
        <div className="box">
             <Navbar />

            <div className='d-flex align-items-center box-md'>

                <div className='flex-shrink-1'>
                    <img src={women} alt='working_women' />

                </div>
                <div className='flex-grow-1 ms-3'>
                <h2>Hello, I'm Aafreen Firdaus</h2>
                A Fullstack Web Developer and a
                Highly-motivated employee with desire to take on new challenges. Strong work ethic, adaptability, and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills.
               
                <div className='links'>

                <a href='https://github.com/Aafreen2202'><i class="fa-brands fa-github"></i></a>
                <a  href='https://www.linkedin.com/in/aafreen-quazi-848417221/' ><i class="fa-brands fa-linkedin"></i></a>

                </div>
                </div>
            </div>

        </div>
    )
};

export default Home;

