import React from "react";
import './skills-section.styles.scss';
import { DiJava } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';

const SkillsSection = () => {
    return (
        <div>
            <header className="bg-alt text-centre" id="skills">
                <div className="Skills-header">
                    <div data-aos="zoom-in-up">
                        <h1>Skills</h1>
                    </div>
                </div>
            </header>

            <section className="bg-alt">
                <div className="container container--narrow">
                    <div className="split remove-padding">
                        <div data-aos="zoom-in" data-aos-delay="350">
                            <div className="skill"> 
                                <h2 id="java"><DiJava size="3em" /></h2>
                                <h3>Java</h3>
                                <p>Spring (Boot & MVC), JUnit, Maven</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="350">
                            <div className="skill">
                                <h2 id="react"><DiReact size="3em" /></h2>
                                <h3>React.js</h3>
                                <p>Native, Redux, Hooks, Router, Bootstrap, Context API</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="350">
                            <div className="skill">
                                <h2 id="js"><IoLogoJavascript size="3em" /></h2>
                                <h3>JavaScript</h3>
                                <p>jQuery, Next.js, Anime.js, AOS</p>
                            </div>
                        </div>
                    </div>
                    <div className="split" id="padding-skills">
                        <div data-aos="zoom-in" data-aos-delay="350">
                            <div className="skill">
                                <h2 id="aws"><FaAws size="3em" /></h2>
                                <h3>Cloud Engineering</h3>
                                <p>AWS EC2, EKS, CloudFormation, CloudWatch, networking etc.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="350">
                            <div className="skill">
                                <h2><FaDatabase size="3em" /></h2>
                                <h3>Databases</h3>
                                <p>MySQL, MongoDB, DynamoDB</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="350">
                            <div className="skill">
                                <h2 id="node"><FaNode size="3em" /></h2>
                                <h3>Node.js</h3>
                                <p>Express.js, GraphQL, Jest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SkillsSection;