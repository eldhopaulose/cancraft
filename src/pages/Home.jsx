import Landpage1 from "../assets/landpage1.png"
import Plus from "../assets/plus.svg"
import Play from "../assets/play.svg"


function Home() {
    return (

        <div className="grid grid-cols-1 grid-rows-5 gap-4">
            <div ><img
                className="lg:h-[calc(100vh-18vh)] w-full lg:object-cover lg:object-center"
                src={Landpage1}
                alt="nature image"
            />
                <div className="lg:absolute lg:top-1/2 lg:left-1/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 ">
                    <p className="text-lg">Bringing Life to Your walls</p>
                    <h4 className="text-5xl">Looking to Print Your<span className=" flex-1 block ">Photos On Canvas?</span></h4>
                    <p className="text-lg">Decorate your walls with beautiful memories using your <span className="flex-1 block">favourite photos</span></p>
                    <div className="mt-4">
                        <button className="bg-black hover:bg-hoverblack text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <span>Customize Now</span>
                            <img className="fill-current w-5 h-5 ml-2" src={Plus} alt="Plus" />
                        </button>
                        <button className="bg-gray-300 hover:bg-hoverblack text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center bg-transparent ml-3">
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