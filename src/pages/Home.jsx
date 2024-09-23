import Landpage1 from "../assets/landpage1.png";
import Plus from "../assets/plus.svg";
import Play from "../assets/play.svg";
import Frame from "../assets/frame1.png";
import HomeMobile from "../assets/home-site-work-mob.png";
import HomeWeb from "../assets/home-site-work-web.png";
import AboutUs from "../assets/about-us.png";
import AboutUsMobile from "../assets/about-us-mob.png";

import "./Home.css";
import ReactSlick from "../components/ReactSilck";
import CarouselDefault from "../components/CarouselDefault";
import { MainCard } from "../components/MainCard";
import { ImageCard } from "../components/ImageCard";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Button, Input } from "@material-tailwind/react";
import { IoMdSend } from "react-icons/io";
import Testimonial from "../components/Testimonial";
import ReactPlayer from "react-player";

const imageLinks = [
  "https://ik.imagekit.io/wdjnrplts/Avathar/Mask%20group(2)_nYOSq3gsE.png?updatedAt=1719086467007",
  "https://ik.imagekit.io/wdjnrplts/Avathar/Mask%20group_Y-aP0TLYko.png?updatedAt=1719086466955",
  "https://ik.imagekit.io/wdjnrplts/Avathar/Mask%20group(3)_el2vP4nasG.png?updatedAt=1719086466928",
  "https://ik.imagekit.io/wdjnrplts/Avathar/Firefly%20generate%20a%20photo%20boy%20smiling%20and%20holding%20black%20frame%20face%20inside%20frame%2054967%201_v_Zqm5631.png?updatedAt=1719086466944",
  "https://ik.imagekit.io/wdjnrplts/Avathar/Mask%20group(1)_8GHGRU5xJ.png?updatedAt=1719086466709",
];

function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows gap-4">
      <div>
        <img className="desktop-img" src={Landpage1} alt="nature image" />
        <img
          className="lg:h-[calc(100vh-18vh)] w-full lg:object-cover lg:object-center md:hidden sm:block lg:hidden"
          src={Landpage1}
          alt="nature image 111"
        />
        <div className="landpage-top-text md:mt-0 lg:mt-0 mt-5 p-3 md:p-0 lg:p-0   hidden lg:block md:block  ">
          <p className="md:text-lg lg:text-lg text-md animate-typing overflow-hidden whitespace-nowrap pr-5 font-bold">
            Bringing Life to Your walls
          </p>
          <h4 className="md:text-4xl lg:text-5xl text-3xl pt-3 font-bold">
            Looking to Print Your
            <span className=" flex-1 block pt-1">Photos On Canvas?</span>
          </h4>
          <p className="md:text-lg lg:text-lg text-md pt-3 ">
            Decorate your walls with beautiful memories using your{" "}
            <span className="md:flex-1 md:block pt-3">favourite photos</span>
          </p>
          <div className="mt-4">
            <Link to="/crop">
              <button className="bg-black text-white hover:bg-hoverblack hover:text-black font-bold py-4 px-8 inline-flex items-center w-max group text-lg">
                <span className="group-hover:text-black">
                  UPLOAD YOUR IMAGE
                </span>
                <img
                  className="fill-current w-8 h-8 ml-3 group-hover:fill-black"
                  src={Plus}
                  alt="Plus"
                />
              </button>
            </Link>
            <button className="bg-gray-300 hover:bg-hoverblack text-gray-800 font-bold py-4 px-8 inline-flex items-center bg-transparent ml-3 text-lg">
              <span>How It Work</span>
              <img
                className="fill-current w-8 h-8 ml-3 text-black"
                src={Play}
                alt="Play"
              />
            </button>
          </div>
        </div>

        <div className=" md:hidden  lg:hidden sm-title-position">
          <h4 className=" pt-3 font-bold sm-title-font-size">
            Looking to{" "}
            <span className="sm:flex-1 block pt-1"> Print Your Photos</span>
            <span className="sm:flex-1 block pt-1">On Canvas?</span>
          </h4>
          <p className="md:text-lg lg:text-lg sm:text-md text-sm pt-3 sm-title-decription-w">
            Decorate your walls with beautiful memories using your{" "}
            <span className="md:flex-1 md:block sm:inline-block pt-3">
              favourite photos
            </span>
          </p>
        </div>
        <div className="landpage-top-text sm:block lg:hidden  md:hidden  sm:w-full sm:pl-4">
          <div className="mt-4 flex flex-col lg:flex-row lg:space-x-3 items-center justify-center">
            <Link to="/crop">
              <button className="bg-black text-white hover:bg-hoverblack hover:text-black font-bold py-4 px-8  inline-flex items-center w-max group mb-3 lg:mb-0">
                <span className="group-hover:text-black">
                  UPLOAD YOUR IMAGE
                </span>
                <img
                  className="fill-current w-5 h-5 ml-2 group-hover:fill-black"
                  src={Plus}
                  alt="Plus"
                />
              </button>
            </Link>
            <button className="bg-gray-300 hover:bg-hoverblack text-gray-800 font-bold py-4 px-8 inline-flex items-center bg-transparent">
              <span>How It Works</span>
              <img
                className="fill-current w-5 h-5 ml-2 text-black"
                src={Play}
                alt="Play"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="row-start-2 relative">
        <div>
          <div className="w-full hidden md:block sm:hidden">
            <img className="w-screen text-black" src={HomeWeb} alt="Plus" />
          </div>
          <div className="w-full md:hidden sm:block lg:hidden">
            <img
              className="w-screen h-[calc(100vh-18vh)] text-black"
              src={HomeMobile}
              alt="Plus"
            />
          </div>
          <div
            className="absolute top-16 lg:top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center 
                      w-full   sm:top-7  
                      "
          >
            <h1 className="text-xl lg:text-5xl  font-bold">How it Works</h1>
            <h3 className="text-xs lg:text-lg mt-2">
              Print your canvas as simply as never before
            </h3>
          </div>
        </div>
      </div>

      <div className="row-start-3 md:p-10 lg:p-10 md:mt-2 lg:mt-2 pl-3 md:pl-3 lg:pl-3 pr-3 md:pr-0 lg:pr-0">
        <h4 className=" text-lg sm:text-xl     md:text-4xl lg:text-5xl text-3xl font-bold text-center">
          Recent Moments We Printed
        </h4>
        {/* <h4 className="text-3xl font-bold">New Canvas</h4> */}
        {/* <p className="text-lg">You can start with creating your photo with frame.</p> */}
        <div>
          <ReactSlick imageLinks={imageLinks} />
        </div>
        <div className="pl-10 pr-10 sm:pl-0 md:mt-0 sm:mt-10  ">
          <ReactSlick imageLinks={imageLinks} rev={true} />
        </div>

        <div className="flex justify-center mt-10 mb-10 ms-16 me-16 rounded-lg overflow-hidden md:h-162.5 h-87.5">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=bqCXjq_1NPw"
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className="row-start-4 relative">
        <div className="w-full hidden md:block sm:hidden">
          <img className="w-screen text-black" src={AboutUs} alt="Plus" />
        </div>
        <div className="w-full md:hidden sm:block lg:hidden">
          <img
            className="w-full h-screen text-black"
            src={AboutUsMobile}
            alt="Plus"
          />
        </div>
        <div className="   absolute top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-1/2 sm:left-1/3 sm:transform sm:-translate-x-1/3 sm:-translate-y-1/3 md:top-1/3 md:bottom-10 md:left-1/4 md:transform md:-translate-x-1/3 md:-translate-y-1/3 lg:top-1/3  lg:transform lg:-translate-x-1/3 lg:-translate-y-1/3 p-6 md:p-10 lg:p-10 bg-opacity-80">
          <h4 className="text-xl lg:text-5xl md:text-5xl font-bold mb-4  text-center  md:text-left  lg:text-left">
            ABOUT US
          </h4>
          <p className="text-14px lg:text-20px md:text-20px mt-2 w-full md:w-1/2 lg:w-1/2  h-full md:h-full lg:h-full md:overflow-auto lg:overflow-auto mt-10 md:mt-20 lg:mt-20 sm-about-content text-center  md:text-left  lg:text-left w-70">
            Welcome to CanCraft Studio, your premier destination for online
            canvas printing services! We transform your cherished memories and
            stunning images into beautiful canvas prints, delivered right to
            your doorstep. Our mission is to bring your visions to life with
            top-quality prints that enhance any space.{" "}
            <Link to="/aboutUs" className="text-blue-500">
              Read More...
            </Link>
          </p>
        </div>
      </div>

      {/* <div className="row-start-5">
                <h4 className="text-3xl font-bold mt-10 pl-10">Free Delivery</h4>
                <p className="text-lg pl-10">Get your business logo into more hands,</p>
                <div className="flex flex-col justify-center items-center">
                    <div className="cover aspect-h-9 w-[calc(100vw-5vw)] h-96">
                        <video className="rounded-lg object-center object-fill w-full h-96" autoPlay loop muted>
                            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div> */}

      <div className="row-start-7 p-10">
        <Testimonial />
      </div>

      <div className="row-start-8 bg-black text-white p-10">
        <div className="flex flex-wrap justify-between items-start max-w-7xl mx-auto">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-4">
            <h4 className="text-xl mb-4">Contact Us</h4>
            <p className="text-sm mb-4">
              For assistance, please contact us at
              <span className="block mt-2">
                us at support@cancraftstudio.com
              </span>
            </p>
            <div className="flex items-center mb-4">
              <FaWhatsapp className="w-8 h-8 mr-2" />
              <p className="text-xl font-medium">
                <Link to="http://wa.me/971566575191">+971566575191</Link>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
            <div className="flex space-x-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaTiktok />
            </div>
            <p className="text-sm font-medium mt-5">
              <Link to="https://www.instagram.com/can_craft_studio?igsh=MXRkd3dnMWNrZW5hdg==">
                Instagram
              </Link>
            </p>
            <p className="text-sm font-medium mt-2">
              <Link to="https://www.facebook.com/share/ACKFtCRYtRCmgbDW/?mibextid=LQQJ4d">
                Facebook
              </Link>
            </p>
            <p className="text-sm font-medium mt-2">
              <Link to="https://www.youtube.com/@cancraftstudio">Youtube</Link>
            </p>
            <p className="text-sm font-medium mt-2">
              <a
                href="https://www.tiktok.com/@cancraft.studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </p>

            <p className="text-sm font-medium mt-2">
              <Link to="https://pin.it/fl2zFh0ag">Pinterest</Link>
            </p>
            <p className="text-sm font-medium mt-2">
              <Link to="https://www.instagram.com/can_craft_studio/">
                SnapChat
              </Link>
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0 pl-4">
            <h4 className="text-xl mb-4">Open Hours</h4>
            <p className="text-sm">
              Monday – Saturday: 8:00 am – 4:00 pmMonday – Saturday Hours: 9:00
              AM to 5:00 PM
              <span className="block mt-2">
                <Link to="/aboutUs">About us</Link>
              </span>
              <span className="block mt-2">
                <Link to="/termsAndConditions">Terms and Condition</Link>
              </span>
              <span className="block mt-2">
                <Link to="/PrivacyPolicy">Privacy Policy</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
