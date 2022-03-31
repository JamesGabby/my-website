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
                                <a title="CV" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1RnVZd2PniRUhigyNhKu4xVke2UtT4Jeu/edit?usp=sharing&ouid=117017291518627947599&rtpof=true&sd=true"><AiFillFilePdf /></a>
                            </div>
                        </div>
                    </div>

                    <div className="align-text-left">
                        <div data-aos="zoom-in">
                            <h2>Biography</h2>
                        </div>
                        <p>
                        I'm a Full-Stack Developer who works predominantly with React.js, Next.js, Node.js, Express.js, MongoDB and Mongoose. I graduated with Distinction from my Master's degree in Computing from The Manchester Metropolitan University. Having a passion for best practices and excellence, I strive to arrive at elegant solutions in building beautifully bespoke, lightning fast and modern web applications.                         </p>
                        <div className="split">
                            <div>
                                <h3>Interests</h3>
                                <ul>
                                    <li>Algorithms & Data Structures</li>
                                    <li>Full-Stack Development</li>
                                    <li>Client-Server Computing</li>
                                    <li>Blockchain</li>
                                    <li>SEO and optimisation</li>
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