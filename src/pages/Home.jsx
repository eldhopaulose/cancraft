import Landpage1 from "../assets/landpage1.png"
import Plus from "../assets/plus.svg"
import Play from "../assets/play.svg"
import Frame from "../assets/frame1.png"
import HomeMobile from "../assets/home-site-work-mob.png"
import HomeWeb from "../assets/home-site-work-web.png"
import AboutUs from "../assets/about-us.png"
import AboutUsMobile from "../assets/about-us-mob.png"

import './Home.css'
import ReactSlick from "../components/ReactSilck"
import CarouselDefault from "../components/CarouselDefault"
import { MainCard } from "../components/MainCard"
import { ImageCard } from "../components/ImageCard"
import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { Button, Input } from "@material-tailwind/react"
import { IoMdSend } from "react-icons/io"
import Testimonial from "../components/Testimonial"


const imageLinks = [
    "https://ik.imagekit.io/wdjnrplts/Avathar/Mask%20group(2)_nYOSq3gsE.png?updatedAt=1719086467007",
    "https://ik.imagekit.io/wdjnrplts/Avathar/Mask%20group_Y-aP0TLYko.png?updatedAt=1719086466955",
    "https://ik.imagekit.io/wdjnrplts/Avathar/Mask%20group(3)_el2vP4nasG.png?updatedAt=1719086466928",
    "https://ik.imagekit.io/wdjnrplts/Avathar/Firefly%20generate%20a%20photo%20boy%20smiling%20and%20holding%20black%20frame%20face%20inside%20frame%2054967%201_v_Zqm5631.png?updatedAt=1719086466944",
    "https://ik.imagekit.io/wdjnrplts/Avathar/Mask%20group(1)_8GHGRU5xJ.png?updatedAt=1719086466709"

    // Add more image links as needed
];

function Home() {
    return (

        <div className="grid grid-cols-1 grid-rows gap-4">
            <div ><img
                className="desktop-img"
                src={Landpage1}
                alt="nature image"
            />
                <img
                    className="lg:h-[calc(100vh-18vh)] w-full lg:object-cover lg:object-center  md:hidden sm:block lg:hidden"
                    src={Frame}
                    alt="nature image"
                />
                <div className="landpage-top-text md:mt-0 lg:mt-0 mt-5 p-3 md:p-0 lg:p-0">
                    <p className="md:text-lg lg:text-lg text-md animate-typing overflow-hidden whitespace-nowrap pr-5   font-bold">Bringing Life to Your walls</p>
                    <h4 className="md:text-5xl lg:text-5xl text-3xl pt-3 font-bold">Looking to Print Your<span className=" flex-1 block pt-1">Photos On Canvas?</span></h4>
                    <p className="md:text-lg lg:text-lg text-md pt-3 ">Decorate your walls with beautiful memories using your <span className="md:flex-1 md:block pt-3">favourite photos</span></p>
                    <div className="mt-4">
                        <Link to="/crop">
                            <button className="bg-black hover:bg-hoverblack text-gray-800 font-bold py-2 px-4  inline-flex items-center w-max ">
                                <span>Customize Now</span>
                                <img className="fill-current w-5 h-5 ml-2" src={Plus} alt="Plus" />
                            </button>
                        </Link>
                        <button className="bg-gray-300 hover:bg-hoverblack text-gray-800 font-bold py-2 px-4  inline-flex items-center bg-transparent ml-3">
                            <span>How It Work</span>
                            <img className="fill-current w-5 h-5 ml-2 text-black" src={Play} alt="Plus" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="row-start-2 relative"> <div className="">
                <div className="w-full hidden  md:block sm:hidden">
                    <img className=" w-screen  text-black" src={HomeWeb} alt="Plus" />
                </div>
                <div className="w-full md:hidden sm:block lg:hidden">
                    <img className=" w-screen h-[calc(100vh-18vh)] text-black" src={HomeMobile} alt="Plus" />
                </div>
                <div className="absolute  top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h4 className="text-3xl font-bold">How it Works</h4>
                    <p className="sm:text-xs md:text-sm lg:text-sm">Print your canvas as simply as never before</p>
                </div>

            </div></div>

            <div className="row-start-3 md:p-10 lg:p-10 md:mt-2 lg:mt-2  pl-3 md:pl-3 lg:pl-3 pr-3 md:pr-0 lg:pr-0">
                <h4 className="text-3xl font-bold">New Canvas</h4>
                <p className="text-lg">You can start with creating your photo with frame.</p>
                <div className=""><ReactSlick imageLinks={imageLinks} /></div>
                <div className="  pl-10 pr-10 sm:pl-0 md:mt-0 sm:mt-10"><ReactSlick imageLinks={imageLinks} rev={true} /></div>

            </div>


            <div className="row-start-4 relative">
                <div className="w-full hidden  md:block sm:hidden">
                    <img className=" w-screen  text-black" src={AboutUs} alt="Plus" />
                </div>
                <div className="w-full md:hidden sm:block lg:hidden">
                    <img className=" w-full h-screen text-black" src={AboutUsMobile} alt="Plus" />
                </div>
                <div className="absolute  top-1/2 bottom-1/2 left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 md:right-96 lg:right-96 sm:right-0 sm:top-1/2 md:top-1/3 lg:top-1/3 sm:left-1/2 md:left-1/3" >
                    <h4 className="text-3xl font-bold relative">ABOUT US</h4>
                    <p className="sm:text-xs  relative  ">Welcome to CanCraft Studio, your premier destination for online canvas printing services! We transform your cherished memories and stunning images into beautiful canvas prints, delivered right to your doorstep. Our mission is to bring your visions to life with top-quality prints that enhance any space.</p>
                </div>
            </div>



            <div className="row-start-5 ">
                <h4 className="text-3xl font-bold mt-10 pl-10">Free Delivery </h4>
                <p className="text-lg pl-10">Get your business logo into more hands,</p>
                <div className="flex flex-col justify-center items-center">

                    <div className="cover aspect-h-9 w-[calc(100vw-5vw)] h-96 ">
                        <video className="rounded-lg object-center object-fill w-full h-96 " autoPlay loop muted>
                            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>



            </div>
            {/* 
            <div className="row-start-"> <div className="p-10">
                <div>
                    <h4 className="text-3xl font-bold">Happy Customers</h4>
                    <p>Get your business logo into more hands</p>
                </div>
                <div className="flex gap-6 justify-center mt-5 flex-col md:flex-row ">
                    <MainCard />
                    <MainCard />
                    <MainCard />
                    <MainCard />
                </div>
            </div></div> */}

            {/* <div className="row-start-6 bg-blue-gray-50 p-10">
                <div className="flex justify-center items-center md:pl-60 lg:pl-60 flex-col md:justify-center md:items-center lg:justify-center lg:items-center md:flex-row lg:flex-row">
                    <div className="">
                        <h1 className="text-3xl font-bold">Tell your Canvas story</h1>
                        <p className="text-lg md:w-1/2 lg:w-1/2">Transform your walls, tell your story, and relive the moments that matter most with our exceptional photo canvas prints.A simple photo can be transformed into a beautiful piece of art when placed in a frame.
                            <br />
                            <br />

                            Not only does it give the photo a physical presence, but it also adds a touch of elegance and personalization to any space.
                        </p>
                    </div>
                    <div className="md:w-5/6 lg:w-5/6 mt-5">
                        <ImageCard />
                    </div>
                </div>
            </div> */}

            <div className="row-start-7 p-10">
                <Testimonial />
            </div>

            <div className=" row-start-8  bg-black flex flex-wrap text-white p-10 md:justify-center lg:justify-center sm:justify-start">
                <div className="md:p-10 lg:p-10 p-2">
                    <h4 className="text-xl p-2">Contact Us</h4>
                    <p className="text-sm p-2">If you have any question, please contact <span className="block mt-2">us at support@cancraftstudio.com</span></p>
                    <div className="flex">
                        <FaWhatsapp className="w-10 h-10" />
                        <p className="ml-2 text-2xl font-medium">+971566575191 </p>
                    </div>
                    <div className="flex text-blue-gray-800 mt-4">
                        <FaFacebookF className="ml-1" />
                        <FaTwitter className="ml-5" />
                        <FaInstagram className="ml-5" />
                        <FaYoutube className="ml-5" />
                        <FaTiktok className="ml-5" />
                    </div>

                </div>

                {/* border-y md:border-y-0 lg:border-y-0  */}

                <div className="md:p-10 lg:p-10 p-2 ">
                    <h4 className="text-xl  p-2">Store Location</h4>
                    <p className="text-sm p-2">Dubai,UAE </p>


                </div>

                <div className="md:p-10 lg:p-10 p-2  ">
                    <h4 className="text-xl  mt-4">Open Hours</h4>
                    <p className="mt-2 text-sm">

                        Monday – Saturday: 8:00 am – 4:00pm
                        <span className="block mt-2">Sunday: Closed</span>
                    </p>
                </div>

                {/* <div className="md:p-10 lg:p-10 p-2  ">
                    <h4 className="text-xl  p-2">Quick Links</h4>
                    <p className="text-sm p-2">Shipping & Returns</p>
                    <p className="text-sm p-2">Privacy Policy</p>
                    <p className="text-sm p-2">Term Of Use</p>
                    <p className="text-sm p-2">Subscribe</p>
                </div> */}
                {/* 
                <div className="md:p-10 lg:p-10 p-2 border-y md:border-y-0 lg:border-y-0 ">
                    <h4 className="text-xl  p-2">Sign Up for Our Newsletter</h4>
                    <p className="ml-2 text-sm">Leave your email to get all hot deals & news <span className="block mt-2">which benefit you most! </span></p>
                    <div className="relative flex w-full max-w-[20rem] ml-2 mt-2">
                        <Input
                            type="email"
                            label="Email Address"

                            className="pr-20 h-14 bg-white"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                        <Button
                            size="md"

                            className="!absolute right-0 top-0 h-10 rounded bg-yellow-800"
                        >
                            <IoMdSend />
                        </Button>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default Home