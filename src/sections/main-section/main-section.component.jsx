import React from "react";
import './main-section.styles.scss';
import pic from './me.jpg';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillCamera } from 'react-icons/ai';
import { AiFillFilePdf } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from "react-router-dom";

const MainSection = () => (
    <div>
        <section className="Dark" id="home">
            <div className="container container--narrow">
                <div className="split">
                    <div className="left-side">
                        <img className="portrait" src={pic} title="A picture of me" alt="A picture of me" />
                        <div className="below-portrait">
                            <h1>James Gabbitus</h1>
                            <div className="code">
                                <code>Full-Stack Developer</code>
                            </div>
                            <div className="socials">
                                <a title="Email" target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=jamesgabbitus@gmail.com"><MdEmail /></a>
                                <a title="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/james-gabbitus/"><AiFillLinkedin /></a>
                                <a title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/JamesGabby"><AiFillGithub /></a>
                                <a id="photo-icon" title="Photography">
                                    <Link to='/photos'>
                                        <AiFillCamera />
                                    </Link>
                                </a>
                                <a title="CV" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1XF3AFJrVP6b76BS4pD-xg2huL65WEDnNCm9g5Zq2skE/edit?usp=sharing"><AiFillFilePdf /></a>
                            </div>
                        </div>
                    </div>

                    <div className="align-text-left">
                        <h2>Biography</h2>
                        <p>
                            Hi, I'm James Gabbitus, currently freelancing as a Full-Stack Developer. I have a Master's degree in Software Engineering from Manchester Metropolitan University (MMU) & a Bachelor's degree in Philosophy. 
                            A bit unconventional, I know. As a graduate in philosophy & a postgrad in software engineering, I strive to merge both disciplines together & derive a philosophy of excellence within the art of software development.
                        </p>
                        <div className="split">
                            <div>
                                <h3>Interests</h3>
                                <ul>
                                    <li>Full-Stack Development</li>
                                    <li>Cloud Computing</li>
                                    <li>Client-Server Computing</li>
                                    <li>Machine Learning</li>
                                    <li>UI/UX</li>
                                </ul>
                            </div>
                            <div className="edu">
                                <h3>Education</h3>
                                <ul className="no-list-styling">
                                    <li><FaGraduationCap size="1.8em" />  MS Software Engineering, 2021<p>Manchester Metropolitan University</p></li>
                                    <li><FaGraduationCap size="1.8em" />  BA Philosophy, 2020<p>Manchester Metropolitan University</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
    
);

export default MainSection;