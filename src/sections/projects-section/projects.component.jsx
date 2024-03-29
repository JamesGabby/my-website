import React from "react";
import crwn from './img/crwn.png';
// import angular from './img/angular.png';
import ch from './img/ch.png';
// import weather from './img/weather-app.png';
import lucidofia from './img/lucidofia.png';
import rupee from './img/rupee.png';
import rupeeuk from './img/rupeeuk.png';
import gabbgroup from './img/gabbgroup.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './projects.styles.scss';

const ProjectsSection = () => (
    <div>
        <header className="Dark text-centre" id="projects">
            <div className="projects-header">
                <div data-aos="zoom-in-up">
                    <h1>Projects</h1>
                </div>
            </div>
        </header>
        <section className="Dark" id="projects">
            <div className="container-projects container--narrow">
                <Carousel autoPlay={true} interval={4000} infiniteLoop={true} transitionTime={700}>
                    <div>
                        <img alt="" src={lucidofia} />
                        <p className="legend">Full Stack MERN Web Application for dream journalling + more</p>
                    </div>
                    <div>
                        <img alt="" src={crwn} />
                        <p className="legend">Crwn Clothing built with React, Redux, Router, Firebase + more</p>
                    </div>
                    <div>
                        <img alt="" src={ch} />
                        <p className="legend">React website built for a client</p>
                    </div>
                    <div>
                        <img alt="" src={gabbgroup} />
                        <p className="legend">GabbGroup React website built for a client</p>
                    </div>
                    <div>
                        <img alt="" src={rupeeuk} />
                        <p className="legend">Rupee Solutions UK React website</p>
                    </div>
                    {/*<div>
                        <img alt="" src={rupee} />
                        <p className="legend">Project Management Dashboard built for Rupee Solutions using Ruby on Rails</p>
                    </div>
                     <div>
                        <img alt="" src={weather} />
                        <p className="legend">Weather app built with Node.js using a couple APIs</p>
                    </div>
                    <div>
                        <img alt="" src={angular} />
                        <p className="legend">Portfolio built using Angular and AWS Amplify</p>
                    </div> */}
                </Carousel>
            </div>
        </section>
    </div>
);

export default ProjectsSection;