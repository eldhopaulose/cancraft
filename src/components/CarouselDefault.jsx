/* eslint-disable react/prop-types */
import { Carousel } from "@material-tailwind/react";

function CarouselDefault({ imageLinks }) {
    return (
        <Carousel
            transition={{ duration: 0 }}
            className="rounded-xl"
            autoplay
            interval={3000} // Autoplay interval in milliseconds
        >
            {imageLinks.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`image ${index + 1}`}
                    className="h-full w-full object-cover"
                />
            ))}
        </Carousel>
    );
}

export default CarouselDefault;
