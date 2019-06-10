import React from 'react';

const Title = ({title}) => {
    return (
        <div className="section-title">
            <h4 className="section-title__title">{title}</h4>
            <div className="section-title__line" />
        </div>
    );
};

export default Title;
