import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img width={450} height={400} src="./img/first.jpg" alt="one" />
                    </div>
                    <div>
                        <img width={450} height={400} src="./img/second.jpg" alt="two" />
                    </div>
                    <div>
                        <img width={450} height={400} src="./img/three.jpg" alt="three" />
                    </div>
                    <div>
                        <img width={450} height={400} src="./img/four.jpg" alt="four" />
                    </div>
                </Slider>
            </div>
        );
    }
}