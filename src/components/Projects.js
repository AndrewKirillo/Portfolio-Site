import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"

export default class Projects extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider className="slider" {...settings}>
                <div>
                    Attendy
                </div>
                <div>
                    Tutorous
                </div>
                <div>
                    Stemgames (?)
                </div>
                <div>
                    Productivity app (IP)
                </div>
                <div>
                    Shared queue app (IP)
                </div>
            </Slider>
        )
    }
}