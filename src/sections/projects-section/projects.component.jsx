import React from "react";
import crwn from './crwn.png';
import ang from './ang.png';
import scr from './scr.png';
import ch from './ch.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './projects.styles.scss';

const ProjectsSection = () => (
    <div>
        <header className="text-centre" id="projects">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
        </header>
        <section id="projects">
            <div className="container-projects container--narrow c">
                <Carousel autoPlay={true} interval={4000} infiniteLoop={true} transitionTime={700}>
                    <div>
                        <img alt="" src={crwn} />
                        <p className="legend">Crwn Clothing built with React, Redux, Router, Firebase + more</p>
                    </div>
                    <div>
                        <img alt="" src={ch} />
                        <p className="legend">React website built for a client</p>
                    </div>
                    <div>
                        <img alt="" src={ang} />
                        <p className="legend">Portfolio built using Angular and AWS Amplify</p>
                    </div>
                    <div>
                        <img alt="" src={scr} />
                        <p className="legend">Scoreboard app built with React</p>
                    </div>
                </Carousel>
            </div>
        </section>
    </div>
);

export default ProjectsSection;