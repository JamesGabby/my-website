import React from "react";
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => {
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