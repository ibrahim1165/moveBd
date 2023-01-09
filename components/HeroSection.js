import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroSection = () => {
    return (
        <div className="carousel-slider">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                className="lg:px-8 mt-8"
            >
                <div>
                    <img
                        className="h-65"
                        loading="lazy" src="https://wallpaperaccess.com/full/3075770.jpg" />
                </div>
                <div>
                    <img

                        className="h-65"
                        loading="lazy" src="https://s.studiobinder.com/wp-content/uploads/2020/05/Best-Action-Movies-of-All-Time-Featured-.jpg" />
                </div>
                <div>
                    <img
                        className="h-65"
                        loading="lazy"
                        src="https://www.whats-on-netflix.com/wp-content/uploads/2022/08/should-you-watch-carter-on-netflix.webp" />
                </div>
            </Carousel>
        </div>
    );
};

export default HeroSection;