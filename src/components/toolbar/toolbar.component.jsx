import React, { useState }  from "react";
import './toolbar.styles.scss';

const Toolbar = () => {
    const [toolbar, setToolbar] = useState(false);

    const reSize = () => {
        window.scrollY >= 10 ? setToolbar(true) : setToolbar(false);
    }
    window.addEventListener('scroll', reSize);

    return (
        <div>
            <div className={toolbar ? 'toolbar active' : 'toolbar'}>
                <p className="Name-text">
                    {toolbar ? 'James Gabbitus' : 'Welcome!'}
                </p>  
                <div className="sections">
                    <a title="Home" href="#home">Home</a>
                    <a title="Skills" href="#skills">Skills</a>
                    <a title="Projects" href="#projects">Projects</a>
                    <a title="CV" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1XF3AFJrVP6b76BS4pD-xg2huL65WEDnNCm9g5Zq2skE/edit?usp=sharing">CV</a>
                    <a title="Contact" href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;