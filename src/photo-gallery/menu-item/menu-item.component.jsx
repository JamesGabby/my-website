import React from "react";
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size}) => {
    let navigate = useNavigate();

    return (
        <div className={`${size} menu-item`}>
            <div 
                title={title}
                className="background-image"
                style={{backgroundImage: `url(${imageUrl})`}} 
            />
        </div>
    );
}

export default MenuItem;