/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ReactSlick({ imageLinks, rev }) {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        rtl: rev ? true : false,

        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
    };

    return (
        <div className="slider-container">
            <Slider {...settings} arrows={false}>
                {imageLinks.map((link, index) => (
                    // <div key={index} className="p-5">
                    //     <img className="h-52 w-52 sm:w-52 sm:w-52 md:h-64 md:w-64 lg:h-80  lg:w-80 " src={link} alt={`Image ${index + 1}`} />
                    // </div>
                    <div key={index} className="p-5">
                        <img
                            className="object-cover h-24 w-32 sm:h-24 sm:w-32 md:h-64 md:w-80 lg:h-72 lg:w-96"
                            src={link}
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ReactSlick;


