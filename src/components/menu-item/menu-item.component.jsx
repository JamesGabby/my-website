import React from "react";
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    let navigate = useNavigate();

    return (
        <div className={`${size} menu-item`}>
            <div 
                className="background-image"
                style={{backgroundImage: `url(${imageUrl})`}} 
            />
        </div>
    );
}

export default MenuItem;