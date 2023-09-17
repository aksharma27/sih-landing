import React from 'react';
import './nav.css';
import Logo from '../assets/logo.png';




const Nav = () => {

    return (
        <div className='app'>
            <header>
                <img src={Logo} alt="logo" className='logo' />

                <nav>
                    <ul className='nav-links'>
                        <li>Home</li>
                        <li>Features</li>
                        <li>About us</li>
                        <li>Work</li>
                        <li>Benefits</li>
                        <li>Testimonials</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </header>

            {/* ----------------------------- HERO ------------------------ */}
            <div className="hero">
                <div className="tag tag1">
                    <h2 className='blue'>Say Goodbye to Waiting Rooms:</h2>
                    <h2>Seamlessly Streamline Your</h2>
                    <h2>Healthcare Experience</h2>
                </div>

                <div className="tag tag2">
                    <p className='one'>
                        <h3>
                            Tired of spending precious hours in crowded <br /> waiting rooms? Say hello to a new era of
                            <br />healthcare with  <span>“Care Compass”</span>.
                        </h3>
                    </p>
                    <p className='two'>
                        <h3>
                            Effortlessly Cut Your Wait Time with <br /> Our Medical Appointment App
                        </h3>
                    </p>
                </div>

                <button>
                    Download App
                </button>
            </div>


            {/* ---------------------Features------------------------------ */}
            <div className="features">
                <div className="features-content">
                    {/* in features-content, we have the blue box for listed items with margin left of about 60% */}
                    <h3>Key Features</h3>

                    <ul>
                        <li>Key Features: Instant Booking: Book medical appointments at your convenience, 24/7, without the need to make a phone call.
                            <li> Real-Time Updates: Receive instant notifications and reminders, so you never miss an appointment again.</li>
                            <li>Reduce Wait Times: Our intelligent scheduling system optimizes clinic flow, minimizing your time spent in waiting rooms.</li>
                            <li>Secure Access: Access your medical records, test results, and prescriptions securely from your smartphone.</li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;
