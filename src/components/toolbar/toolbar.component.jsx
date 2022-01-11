import React, { useState }  from "react";
import './toolbar.styles.scss';
import { ImCross } from 'react-icons/im';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Toolbar = () => {
    const [toolbar, setToolbar] = useState(false);
    const [count, setCount] = useState(false);

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
                    <a title="Home" href="/#home">Home</a>
                    <a title="Skills" href="/#skills">Skills</a>
                    <a title="Projects" href="/#projects">Projects</a>
                    <a title="Contact" href="/#contact">Contact</a>
                    <a id='Menu' onClick={() => setCount(!count)}>{count ? <ImCross size={'1.5rem'} /> : <AiOutlineMenu size={'2.5rem'} color="#6CADDF" />}</a>
                </div>
            </div>
            <div className={count ? 'List active' : 'List'}>
                    <div>
                        <a style={{color: '#fff'}} href="/#home" onClick={() => setCount(!count)}><h2>Home</h2></a>
                    </div>
                    <div>
                        <a title="CV" style={{color: '#fff'}} target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1XF3AFJrVP6b76BS4pD-xg2huL65WEDnNCm9g5Zq2skE/edit?usp=sharing"><h2>CV</h2></a>
                    </div>
                    <div>
                        <a title="Photography">
                            <Link to='/photos'>
                                <h2>Photography</h2>
                            </Link>
                        </a>            
                    </div>
                    <div>
                        <a style={{color: '#fff'}} href="/#contact" onClick={() => setCount(!count)}><h2>Contact</h2></a>
                    </div>
                </div>
        </div>
    );
}

export default Toolbar;