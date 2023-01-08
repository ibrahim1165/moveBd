import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroSection = () => {
    return (
        <div>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                // showThumbs={false}
                interval={5000}
                className="lg:px-8 lg:mt-8"
            >
                <div>
                    <img
                        className="h-65"
                        loading="lazy" src="https://images.unsplash.com/photo-1532568547949-a09f1afe4d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </div>
                <div>
                    <img

                        className="h-65"
                        loading="lazy" src="https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </div>
                <div>
                    <img
                        className="h-65"
                        loading="lazy"
                        src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </div>
            </Carousel>
        </div>
    );
};

export default HeroSection;