import React from "react";
import './react-message.styles.scss';
import logo from './logo.svg';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';


const ReactMessage = () => (
    <div className="React-message">
        <div className="pwr"><code>Powered by React</code><img src={logo} className="App-logo" alt="logo" /></div>
        <code id="name"><AiOutlineCopyrightCircle id="icon"/> James Gabbitus, {new Date().getFullYear()}</code>
    </div>
);

export default ReactMessage;