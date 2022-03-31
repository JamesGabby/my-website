import React from "react";
import './cover-photo.styles.scss';
import { DiJava } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';


const CoverPhoto = () => {
    return (
        <div>
            <section id="cover">
                <div className="container container--narrow">
                    <div className="split">   
                        <div>
                            <div className="skill">
                                <h2 id="react2"><DiReact size="3em" /></h2>
                                <h3>React.js</h3>
                                <p id='p2'>Native, Redux, Hooks, Router, Bootstrap, Context API</p>
                            </div>
                        </div>
                        <div>
                            <div className="skill">
                                <h2 id="node2"><FaNode size="3em" /></h2>
                                <h3>Node.js</h3>
                                <p id='p2'>Express.js, GraphQL, Jest</p>
                            </div>
                        </div>
                        <div>
                            <div className="skill">
                                <h2 id="next"><SiNextdotjs size="3em" /></h2>
                                <h3>Next.js</h3>
                                <p id='p2'>Pre-rendering, Image Optimisation</p>
                            </div>
                        </div>
                        <div>
                            <div className="skill">
                                <h2 id="mongo"><SiMongodb size="3em" /></h2>
                                <h3>MongoDB</h3>
                                <p id='p2'>Mongoose</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className="skill">
                                <h2 id="aws2"><FaAws size="3em" /></h2>
                                <h3>AWS</h3>
                                <p id='p2'>AWS EC2, EKS, CloudFormation, CloudWatch, networking etc.</p>
                            </div>
                        </div>    
                        <div>
                            <div className="skill"> 
                                <h2 id="java2"><DiJava size="3em" /></h2>
                                <h3>Java</h3>
                                <p id='p2'>Spring (Boot & MVC), JUnit, Maven</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CoverPhoto;