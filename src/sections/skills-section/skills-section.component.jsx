import React, { Component }  from "react";
import './skills-section.styles.scss';
import { DiJava } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import crwn from './crwn.png';
import ang from './ang.png';
import scr from './scr.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SkillsSection = () => (
    <div>
        <header className="bg-alt text-centre" id="skills">
            <div className="skills-header">
                <h1>Skills</h1>
            </div>
        </header>

        <section className="bg-alt">
            <div className="container container--narrow">
                <div className="split remove-padding">
                    <div className="skill"> 
                        <h2 id="java"><DiJava size="3em" /></h2>
                        <h3>Java</h3>
                        <p>Spring (Boot & MVC), JUnit, Maven</p>
                    </div>
                    <div className="skill">
                        <h2 id="react"><DiReact size="3em" /></h2>
                        <h3>React</h3>
                        <p>Redux, Hooks, Router, Bootstrap</p>
                    </div>
                    <div className="skill">
                        <h2 id="js"><IoLogoJavascript size="3em" /></h2>
                        <h3>JavaScript</h3>
                        <p>jQuery, Next.js, Anime.js, AOS</p>
                    </div>
                </div>
                <div className="split" id="padding-skills">
                    <div className="skill">
                        <h2 id="aws"><FaAws size="3em" /></h2>
                        <h3>Cloud Engineering</h3>
                        <p>AWS EC2, EKS, CloudFormation, CloudWatch, networking etc.</p>
                    </div>
                    <div className="skill">
                        <h2><FaDatabase size="3em" /></h2>
                        <h3>Databases</h3>
                        <p>MySQL, MongoDB, DynamoDB</p>
                    </div>
                    <div className="skill">
                        <h2 id="node"><FaNode size="3em" /></h2>
                        <h3>Node</h3>
                        <p>Express, GraphQL, Jest</p>
                    </div>
                </div>
            </div>
        </section>
        <header className="text-centre" id="projects">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
        </header>
        <section id="projects">
            <div className="container container--narrow c">
                <Carousel autoPlay={true} interval={4000} infiniteLoop={true} transitionTime={700}>
                    <div>
                        <img src={crwn} />
                        <p className="legend">Crwn Clothing built with React, Redux, Router, Firebase + more</p>
                    </div>
                    <div>
                        <img src={ang} />
                        <p className="legend">Portfolio built using Angular and AWS Amplify</p>
                    </div>
                    <div>
                        <img src={scr} />
                        <p className="legend">Scoreboard app built with React</p>
                    </div>
                </Carousel>
            </div>
        </section>
    </div>
);

export default SkillsSection;