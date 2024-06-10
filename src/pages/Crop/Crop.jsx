import { useState, useRef, useEffect } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import './crop.css';
import { fabric } from 'fabric';
import { Button, Switch } from '@material-tailwind/react';
import { FaPortrait } from 'react-icons/fa';
import { MdLandscape } from 'react-icons/md';
import Black from '../../assets/black.jpg';
import Gold from '../../assets/gold.jpg';
import Champagne from '../../assets/f7e7ce.jpg';
import White from '../../assets/white.jpg';
import ImageKit from 'imagekit';

function Crop() {
    const [frameColor, setFrameColor] = useState('black');
    const [orientation, setOrientation] = useState('portrait');
    const [imageSrc, setImageSrc] = useState('');
    const [price, setPrice] = useState(70);
    const [selectedSize, setSelectedSize] = useState('30x40 cm');
    const [tintedImage, setTintedImage] = useState(null);
    const [dimensionsData, setDimensionsData] = useState({});
    const imageRef = useRef(null);
    const cropperRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const imagekit = new ImageKit({
        publicKey: "public_fgK1/+bZMqOgVHO2NsxlNYNFcy4=",
        privateKey: "private_Rdty71W/pLCToAZYODzQq1eEHVY=",
        urlEndpoint: "https://ik.imagekit.io/aafumgo6j"
    });

    useEffect(() => {
        // Fetch dimensions data from backend
        fetch('https://cancraft.onrender.com/api/dimensions/dimensions')
            .then(response => response.json())
            .then(data => {
                setDimensionsData(data);
                if (data[selectedSize]) {
                    setPrice(sizePriceMap[selectedSize]);
                    const { width, height } = data[selectedSize][orientation];
                    resizeBoxes(width, height);
                }
            })
            .catch(error => console.error('Error fetching dimensions data:', error));
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImageSrc(reader.result);
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    };

    const handleImageChange = async () => {
        if (selectedFile) {
            try {
                const response = await imagekit.upload({
                    file: selectedFile,
                    fileName: selectedFile.name,
                });
                console.log('Image URL:', response.url);
            } catch (error) {
                console.error('Image upload failed:', error);
            }
        }
    };

    const handleCropedImageChange = async (croppedDataURL) => {
        const blob = await fetch(croppedDataURL).then(r => r.blob());
        const file = new File([blob], "cropped_image.png", { type: "image/png" });

        try {
            const response = await imagekit.upload({
                file: file,
                fileName: file.name,
            });
            console.log('Cropped Image URL:', response.url);
        } catch (error) {
            console.error('Cropped image upload failed:', error);
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

    const handleFrameChange = (e) => {
        const color = e.target.dataset.color;
        setFrameColor(color);
        applyTint(color);
    };

    const handleOrientationChange = (e) => {
        const newOrientation = e.target.checked ? 'landscape' : 'portrait';
        setOrientation(newOrientation);
        if (dimensionsData[selectedSize]) {
            const { width, height } = dimensionsData[selectedSize][newOrientation];
            resizeBoxes(width, height);
        }
    };

    const resizeBoxes = (width, height) => {
        const outerBox = document.getElementById('outerBox');
        if (outerBox) {
            outerBox.style.width = `${width}px`;
            outerBox.style.height = `${height}px`;
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
                handleCropedImageChange(croppedDataURL); // Call handleCropedImageChange here with the cropped data
            }
        }
    };

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
        setPrice(sizePriceMap[size]);
        if (dimensionsData[size]) {
            const { width, height } = dimensionsData[size][orientation];
            resizeBoxes(width, height);
        }
    };

    const handleFrameSelection = (withFrame) => {
        const basePrice = sizePriceMap[selectedSize];
        setPrice(withFrame ? basePrice + 40 : basePrice);
    };

    const applyTint = (color) => {
        if (cropperRef.current) {
            const canvas = cropperRef.current.getCroppedCanvas();
            const fabricCanvas = new fabric.StaticCanvas(canvas);
            const tintFilter = new fabric.Image.filters.Tint({
                color: color,
                opacity: 0.3,
            });

            fabricCanvas.backgroundImage.filters.push(tintFilter);
            fabricCanvas.backgroundImage.applyFilters();
            setTintedImage(fabricCanvas.toDataURL());
        }
    };

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

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 p-2">
                    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 md:hidden lg:hidden mb-4" role="alert">
                        <p className="font-bold">Be Warned</p>
                        <p>The size ratio may vary on different devices. For accurate dimensions, please use a PC or desktop.</p>
                    </div>
                    <div
                        id="outerBox"
                        className="rounded shadow-md transition-all duration-300"
                        style={{
                            width: '360px',
                            height: '480px',
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
                            type="file"
                            style={{
                                backgroundImage: `url(${tintedImage || 'https://ik.imagekit.io/n1ojwguj2/manu/upload%20your%20image.png?updatedAt=1713520779683'})`,
                            }}
                        ></div>
                    </div>
                </div>

                <div className="mt-4 md:hidden lg:hidden">
                    <div className="flex flex-wrap">
                        <div className="md:w-full p-2">
                            <div className="flex">
                                <label
                                    htmlFor="customImageUpload"
                                    className="bg-black text-white px-4 py-2 rounded-l-md cursor-pointer"
                                >
                                    Upload File
                                </label>
                                <div className="flex-grow bg-gray-200 px-4 py-2 rounded-r-md">
                                    <input
                                        type="file"
                                        id="customImageUpload"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                    <span className="text-gray-500">
                                        {selectedFile ? selectedFile.name : 'No file selected'}
                                    </span>
                                </div>
                            </div>
                        </div>
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
                    </div>
                    {selectedFile ? (
                        <Button
                            className="btn btn-secondary button-margin custom-crop-button mt-4"
                            onClick={customCropImage}
                        >
                            Custom Crop
                        </Button>
                    ) : null}
                </div>

                <div className="w-full md:w-1/3 p-2">
                    <div className="mb-4">
                        <h3>Select Frame Colour</h3>
                        {['black', 'gold', '#f7e7ce', 'white'].map((color) => (
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
                            <FaPortrait
                                className={`fa-solid fa-image-portrait ml-2 ${orientation === 'portrait' ? 'text-2xl' : 'text-xl'}`}
                                title="Portrait"
                            />
                            <label className="switch ml-3">
                                <Switch onChange={handleOrientationChange} />
                                <span className="slider round"></span>
                            </label>
                            <MdLandscape
                                className={`fa-solid fa-image ml-5 ${orientation === 'landscape' ? 'text-2xl' : 'text-xl'}`}
                                title="Landscape"
                            />
                        </div>

                        <div className="flex">
                            <div className="mt-4">
                                <p>Price: {price} د.إ</p>
                            </div>
                            <Button className="btn btn-secondary button-margin custom-crop-button mt-4" onClick={() => { handleImageChange(); customCropImage(); }}>Add to cart</Button>

                        </div>
                    </div>

                    <div className="mt-1">
                        <h5>Select Size Ratio</h5>
                        {Object.keys(dimensionsData).map((size) => (
                            <Button
                                key={size}
                                className="mt-3 mr-4 h-16 w-36 md:h-11 md:w-20 lg:h-11 lg:w-28"
                                onClick={() => handleSizeSelection(size)}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-4 hidden md:block lg:block">
                <div className="flex flex-wrap">
                    <div className="md:w-96 p-2">
                        <div className="flex">
                            <label
                                htmlFor="customImageUpload"
                                className="bg-black text-white px-4 py-2 rounded-l-md cursor-pointer"
                            >
                                Upload File
                            </label>
                            <div className="flex-grow bg-gray-200 px-4 py-2 rounded-r-md">
                                <input
                                    type="file"
                                    id="customImageUpload"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                                <span className="text-gray-500">
                                    {selectedFile ? selectedFile.name : 'No file selected'}
                                </span>
                            </div>
                        </div>
                    </div>
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
                </div>
                {selectedFile ? (
                    <Button
                        className="btn btn-secondary button-margin custom-crop-button mt-4"
                        onClick={customCropImage}
                    >
                        Custom Crop
                    </Button>
                ) : null}
            </div>
        </div>
    );
}

export default Crop;
