import { useState, useRef, useEffect } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import './crop.css';
import Fabric from 'fabric';
import { Button, Switch } from '@material-tailwind/react';
import { FaPortrait } from 'react-icons/fa';
import { MdLandscape } from 'react-icons/md';
import Black from '../../assets/black.jpg';
import Gold from '../../assets/gold.jpg';
import Champagne from '../../assets/f7e7ce.jpg';
import White from '../../assets/white.jpg';



function Crop() {
    const [frameColor, setFrameColor] = useState('gold');
    const [orientation, setOrientation] = useState('portrait');
    const [imageSrc, setImageSrc] = useState('');
    const [price, setPrice] = useState(70);
    const [customPrice, setCustomPrice] = useState(110);
    const [selectedSize, setSelectedSize] = useState('30x40 cm');
    const [tintedImage, setTintedImage] = useState(null); // New state for tinted image
    const imageRef = useRef(null);
    const cropperRef = useRef(null);

    const getImageName = (color) => {
        switch (color) {
            case 'black':
                return Black;
            case 'gold':
                return Gold;
            case '#f7e7ce':
                return Champagne;
            case 'white':
                return White;
            default:
                return '';
        }
    };

    const sizePriceMap = {
        '30x40 cm': 70,
        '40x60 cm': 90,
        '50x60 cm': 110,
        '50x70 cm': 130,
        '60x90 cm': 150,
        '60x120 cm': 170,
        '100x200 cm': 250,
        '80x120 cm': 210,
        '70x140 cm': 230,
        '90x120 cm': 190,
        '120x180 cm': 270
    };

    useEffect(() => {
        if (imageSrc && imageRef.current) {
            cropperRef.current = new Cropper(imageRef.current, {
                aspectRatio: NaN,
                viewMode: 1,
            });
        }

        return () => {
            if (cropperRef.current) {
                cropperRef.current.destroy();
                cropperRef.current = null;
            }
        };
    }, [imageSrc]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImageSrc(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleFrameChange = (e) => {
        const color = e.target.dataset.color;
        setFrameColor(color);
        applyTint(color); // Call the applyTint function
    };

    const handleOrientationChange = (e) => {
        setOrientation(e.target.checked ? 'landscape' : 'portrait');
    };

    const resizeBoxes = (width, height) => {
        const outerBox = document.getElementById('outerBox');
        if (outerBox) {
            outerBox.style.width = orientation === 'portrait' ? `${height}px` : `${width}px`;
            outerBox.style.height = orientation === 'portrait' ? `${width}px` : `${height}px`;
        }
    };

    const customCropImage = () => {
        if (cropperRef.current) {
            const croppedCanvas = cropperRef.current.getCroppedCanvas();
            if (croppedCanvas) {
                const croppedDataURL = croppedCanvas.toDataURL();
                const innerBox = document.getElementById('innerBox');
                if (innerBox) {
                    innerBox.style.backgroundImage = `url(${croppedDataURL})`;
                }
            }
        }
    };

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
        setPrice(sizePriceMap[size]);
    };

    const handleFrameSelection = (withFrame) => {
        const basePrice = sizePriceMap[selectedSize];
        setPrice(withFrame ? basePrice + 40 : basePrice);
    };

    const applyTint = (color) => {
        if (cropperRef.current) {
            const canvas = cropperRef.current.getCroppedCanvas();
            const fabricCanvas = new Fabric.StaticCanvas(canvas);
            const tintFilter = new Fabric.Image.filters.Tint({
                color: color,
                opacity: 0.3, // Adjust the opacity as needed
            });

            fabricCanvas.backgroundImage.filters.push(tintFilter);
            fabricCanvas.backgroundImage.applyFilters();
            setTintedImage(fabricCanvas.toDataURL());
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 p-2">
                    <div
                        id="outerBox"
                        className={`rounded shadow-md transition-all duration-300`}
                        style={{
                            width: '333.333px',
                            height: '500px',
                            padding: '10px',
                            backgroundImage: `url(golden.webp)`,
                            backgroundColor: frameColor,
                            border: '2px solid lightgray',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div
                            id="innerBox"
                            className="rounded w-auto h-full bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url(${tintedImage || 'https://ik.imagekit.io/n1ojwguj2/manu/upload%20your%20image.png?updatedAt=1713520779683'})`,
                            }}
                        ></div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <div className="mb-4">
                        <h3>Select Frame Colour</h3>
                        {['black', 'gold', '#f7e7ce', 'white',].map((color) => (
                            <label key={color} className="inline-block mr-2">
                                <input
                                    type="radio"
                                    name="color"
                                    data-color={color}
                                    className="hidden"
                                    onChange={handleFrameChange}
                                    defaultChecked={color === 'gold'}
                                />
                                <img
                                    src={getImageName(color)}
                                    alt={color}
                                    className="w-20 h-20 rounded cursor-pointer"
                                />
                            </label>
                        ))}


                    </div>

                    <div className="Orientation-Mode mb-4">
                        <h5>Select Orientation</h5>
                        <div className="flex">

                            <MdLandscape
                                id="landscape-icon"
                                className={`fa-solid fa-image ml-5 ${orientation === 'portrait' ? 'text-2xl' : 'text-xl'}`}
                                title="Landscape"
                            />


                            <label className="switch ml-3">
                                {/* <input
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                onChange={handleOrientationChange}
                            /> */}


                                <Switch id="flexSwitchCheckDefault"
                                    onChange={handleOrientationChange} />

                                <span className="slider round"></span>

                            </label>
                            <FaPortrait id="portrait-icon"
                                className={`fa-solid fa-image-portrait ml-2 ${orientation === 'landscape' ? 'text-2xl' : 'text-xl'}`}
                                title="Portrait" />

                        </div>
                    </div>
                    <div className="mt-1">
                        <h5>Select Size Ratio</h5>
                        {[
                            { size: '30x40 cm', w: 360, h: 480 },
                            { size: '40x60 cm', w: 400, h: 600 },
                            { size: '50x60 cm', w: 500, h: 600 },
                            { size: '50x70 cm', w: 400, h: 560 },
                            { size: '60x90 cm', w: 360, h: 540 },
                            { size: '60x120 cm', w: 300, h: 600 },
                            { size: '100x200 cm', w: 250, h: 500 },
                            { size: '80x120 cm', w: 400, h: 600 },
                            { size: '70x140 cm', w: 300, h: 600 },
                            { size: '90x120 cm', w: 450, h: 600 },
                            { size: '120x180 cm', w: 360, h: 540 }
                        ].map(({ size, w, h }) => (
                            <Button
                                key={size}
                                className="mt-3 p-2 mr-4" // Add margin-right to create space between buttons
                                onClick={() => {
                                    resizeBoxes(w, h);
                                    handleSizeSelection(size);
                                }}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>

                </div>
            </div>

            <div className="mt-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-2/3 p-2">
                        <div className="rounded shadow-md">
                            {imageSrc && (
                                <img
                                    ref={imageRef}
                                    id="customInnerBox"
                                    className="rounded frame max-w-full max-h-full"
                                    src={imageSrc}
                                    alt="Custom Crop"
                                />
                            )}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-2">
                        <div className="flex justify-center items-center">
                            <div className="flex-grow-1 mr-3">
                                <input
                                    type="file"
                                    id="customImageUpload"
                                    accept="image/*"
                                    className="form-control custom-file-input"
                                    onChange={handleImageUpload}
                                />
                                <label
                                    className="custom-file-label"
                                    htmlFor="customImageUpload"
                                >
                                    Upload File
                                </label>
                            </div>
                        </div>
                        <button
                            className="btn btn-secondary button-margin custom-crop-button mt-4"
                            onClick={customCropImage}
                        >
                            Custom Crop
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <p>Price: {price} د.إ</p>
                <p>Custom Price: {customPrice} د.إ</p>
            </div>
        </div>
    );
}

export default Crop;