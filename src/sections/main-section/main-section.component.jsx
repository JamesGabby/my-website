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
                        <div data-aos="zoom-in">
                            <h2>Biography</h2>
                        </div>
                        <p>
                        A determined and enthusiastic Junior Full-stack Developer with a Master's degree in Computing. I take pride in doing excellent work to the highest of standard, utilising best practices and not stopping until it is in its most ideal form. I'm highly motivated to do what it takes and more to achieve a successful career in the software industry. I would like to join a team to start my role as a professional developer, getting involved in projects and making a difference. I have a solid understanding of the MERN stack as well as Java development.
                        </p>
                        <div className="split">
                            <div>
                                <h3>Interests</h3>
                                <ul>
                                    <li>Full-Stack Development</li>
                                    <li>Cloud Computing</li>
                                    <li>Client-Server Computing</li>
                                    <li>Machine Learning</li>
                                    <li>React.js + Node.js</li>
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