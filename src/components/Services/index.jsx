import React from 'react';

import Title from '../TitleComponent'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

const Services = () => {
    let itemArray = [
        {
            icon: <FaCocktail />,
            title: 'Free cocktails',
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }
    ];

    return (
        <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {itemArray.map((item, index) =>
                    <article key={index} className="service">
                        <span className="service__icon">{item.icon}</span>
                        <h6 className="service__title">{item.title}</h6>
                        <p className="service__text">{item.info}</p>
                    </article>
                )}
            </div>
        </section>
    );
};

export default Services;
