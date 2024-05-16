/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ReactSlick({ imageLinks }) {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {imageLinks.map((link, index) => (
                    <div key={index} className="p-5">
                        <img className="w-full" src={link} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ReactSlick;


