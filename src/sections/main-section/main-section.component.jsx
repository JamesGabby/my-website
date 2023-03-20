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
                        <img className="portrait" src={pic} title="A picture of me" alt="James Gabbitus portrait" />
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
                                <a title="CV" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1rPBOh4M4UrNBG7AM8yyeaXoFnsJuUUBVn96mIOzQLNA/edit?usp=sharing"><AiFillFilePdf /></a>
                            </div>
                        </div>
                    </div>

                    <div className="align-text-left">
                        <div data-aos="zoom-in">
                            <h2>Biography</h2>
                        </div>
                        <p>
                        I'm a junior Full-Stack Developer with 6 months commercial experience in Ruby on Rails. 
                        I'm well versed in the MERN stack (MongoDB, Express.js, React.js, Node.js), Java, CSS and TypeScript. 
                        I graduated with Distinction from my Master's degree in Computing from The Manchester Metropolitan 
                        University where I became proficient in Java. I really enjoy front-end development and I strive to 
                        develop expertise in the whole Software Development Life Cycle in order to hone my skills as a Developer.
                        </p>
                        <div className="split">
                            <div>
                                <h3>Interests</h3>
                                <ul>
                                    <li>Algorithms & Data Structures</li>
                                    <li>Full-Stack Development</li>
                                    <li>Client-Server Computing</li>
                                    <li>Web Development</li>
                                    <li>SEO</li>
                                </ul>
                            </div>
                            <div className="edu">
                                <h3>Education</h3>
                                <ul className="no-list-styling">
                                    <li><FaGraduationCap size="1.8em" />  MS Computing, 2021<p>Manchester Metropolitan University</p></li>
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