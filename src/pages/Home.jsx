import Landpage1 from "../assets/landpage1.png"
import Plus from "../assets/plus.svg"
import Play from "../assets/play.svg"
import Frame from "../assets/frame1.png"

import './Home.css'


function Home() {
    return (

        <div className="grid grid-cols-1 grid-rows-5 gap-4">
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
                    <p className="md:text-lg lg:text-lg text-md animate-typing overflow-hidden whitespace-nowrap border-r-4  pr-5   font-bold">Bringing Life to Your walls</p>
                    <h4 className="md:text-5xl lg:text-5xl text-3xl pt-3 font-bold">Looking to Print Your<span className=" flex-1 block pt-1">Photos On Canvas?</span></h4>
                    <p className="md:text-lg lg:text-lg text-md pt-3 ">Decorate your walls with beautiful memories using your <span className="md:flex-1 md:block pt-3">favourite photos</span></p>
                    <div className="mt-4">
                        <button className="bg-black hover:bg-hoverblack text-gray-800 font-bold py-2 px-4  inline-flex items-center w-max ">
                            <span>Customize Now</span>
                            <img className="fill-current w-5 h-5 ml-2" src={Plus} alt="Plus" />
                        </button>
                        <button className="bg-gray-300 hover:bg-hoverblack text-gray-800 font-bold py-2 px-4  inline-flex items-center bg-transparent ml-3">
                            <span>How It Work</span>
                            <img className="fill-current w-5 h-5 ml-2 text-black" src={Play} alt="Plus" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row-start-2">2</div>
            <div className="row-start-3">3</div>
            <div className="row-start-4">4</div>
            <div className="row-start-5">5</div>
        </div>

    )
}

export default Home