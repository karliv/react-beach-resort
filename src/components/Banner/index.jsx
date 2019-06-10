import React from 'react';

const Banner = ({children, title, subtitle}) => {
    return (
        <div className="banner">
            <h1 className="banner__title">{title}</h1>
            <div className="banner__line" />
            <p className="banner__text">{subtitle}</p>
            {children}
        </div>
    );
};

export default Banner;
