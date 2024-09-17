import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Us</h1>
                <p className="mb-4 text-lg md:text-xl font-semibold text-center">Welcome to Cancraft Studio!</p>

                <section className="mb-8">
                    <p className="mb-4 text-sm md:text-base">
                        Cancraft Studio is a newly launched e-commerce company dedicated to transforming your personal photos into beautiful canvas prints that you can cherish forever. Our mission is to provide an easy, affordable, and high-quality way to capture your most precious moments and display them proudly in your home or office.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="text-sm md:text-base">
                        Founded in 2024, Cancraft Studio emerged from a passion for photography and a desire to help people preserve their memories in a tangible, artistic form. We believe that every photo has a story to tell, and there’s no better way to share that story than by turning it into a stunning piece of canvas art.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">What We Do</h2>
                    <p className="text-sm md:text-base mb-4">
                        At Cancraft Studio, we make it simple for you to print your personal photos on canvas. Whether it’s a cherished family portrait, a breathtaking landscape from your travels, or a memorable event, we ensure your photos are printed with the highest quality and delivered right to your doorstep. Our process is straightforward:
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base">
                        <li><strong>Upload Your Photo:</strong> Easily upload your favorite photos from your device to our website.</li>
                        <li><strong>Customize Your Canvas:</strong> Choose from a variety of sizes and frames to create the perfect canvas print.</li>
                        <li><strong>Place Your Order:</strong> Complete your order with our secure checkout process.</li>
                        <li><strong>Fast Delivery:</strong> We handle the rest, ensuring your custom canvas print is professionally crafted and delivered to your door.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Commitment to Quality</h2>
                    <p className="text-sm md:text-base">
                        We make sure that only the best materials and cutting-edge printing technology are used to ensure your canvas prints are vibrant, durable, and of the highest quality. Each canvas undergoes a meticulous inspection process to meet our rigorous standards before it is shipped to you.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Customer Satisfaction</h2>
                    <p className="text-sm md:text-base">
                        Your satisfaction is our top priority. We are committed to providing exceptional customer service and support throughout your entire experience with us. From the moment you upload your photo to the day it arrives at your door, we strive to make the process as smooth and enjoyable as possible.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Join Us on This Journey</h2>
                    <p className="text-sm md:text-base">
                        We invite you to explore our website and discover how easy it is to turn your personal photos into beautiful canvas prints. Whether you’re looking to decorate your own space or give a unique gift, Cancraft Studio is here to help you celebrate and preserve your special moments.
                    </p>
                    <p className="text-sm md:text-base">
                        Thank you for choosing Cancraft Studio. We look forward to creating something beautiful with you!
                    </p>
                </section>

                <p className="text-center text-sm md:text-base font-semibold">Cancraft Studio</p>
            </div>
        </div>
    );
};

export default AboutUs;
