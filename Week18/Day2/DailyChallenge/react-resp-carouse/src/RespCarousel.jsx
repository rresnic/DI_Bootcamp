import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hongKong from "./assets/hongkong.jpg" ;
import macau from "./assets/macau.webp";
import japan from "./assets/japan.webp";
import la from "./assets/la.webp";

class RepCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={hongKong} />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={macau} />
                    <p className="legend">Macau</p>
                </div>
                <div>
                    <img src={japan} />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={la}/>
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        );
    }
};

export default RepCarousel;