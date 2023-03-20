import React, { useState }  from "react";
import './toolbar.styles.scss';
import { ImCross } from 'react-icons/im';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Toolbar = () => {
    const [toolbar, setToolbar] = useState(false);
    const [dropdownIsEnabled, setdropdownIsEnabled] = useState(false);

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
                    <a id='Hide-on-mobile' title="Home" href="/#home">Home</a>
                    <a id='Hide-on-mobile' title="Skills" href="/#skills">Skills</a>
                    <a id='Hide-on-mobile' title="Projects" href="/#projects">Projects</a>
                    <a id='Hide-on-mobile' title="Contact" href="/#contact">Contact</a>
                    <a id='Menu' onClick={() => setdropdownIsEnabled(!dropdownIsEnabled)}>{dropdownIsEnabled ? <ImCross size={'1.5rem'} color="red" /> : <AiOutlineMenu size={'2.5rem'} color="#6CADDF" />}</a>
                </div>
            </div>
            <div className={dropdownIsEnabled ? 'List active' : 'List'}>
                <div className="List-child-top">
                    <a style={{color: '#fff'}} href="/#home" onClick={() => setdropdownIsEnabled(!dropdownIsEnabled)}><h2>Home</h2></a>
                </div>
                <div className="List-child">
                    <a title="CV" style={{color: '#fff'}} target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1rPBOh4M4UrNBG7AM8yyeaXoFnsJuUUBVn96mIOzQLNA/edit?usp=sharing"><h2>CV</h2></a>
                </div>
                <div className="List-child">
                    <a title="Photography">
                        <Link to='/photos'>
                            <h2>Photography</h2>
                        </Link>
                    </a>            
                </div>
                <div className="List-child">
                    <a style={{color: '#fff'}} href="/#contact" onClick={() => setdropdownIsEnabled(!dropdownIsEnabled)}><h2>Contact</h2></a>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;