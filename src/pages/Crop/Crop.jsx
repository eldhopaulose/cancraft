import { useState, useRef, useEffect } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import './crop.css';
import { fabric } from 'fabric';
import {
    Button, Switch, Navbar,
    MobileNav,

    IconButton,
    Card,
    CardBody,
    Typography,
    CardFooter,
    Dialog,
    Input,
} from '@material-tailwind/react';
import { FaPortrait } from 'react-icons/fa';
import { MdLandscape } from 'react-icons/md';
import Black from '../../assets/black.jpg';
import Gold from '../../assets/gold.jpg';
import Champagne from '../../assets/f7e7ce.jpg';
import White from '../../assets/white.jpg';
import NoFrame from '../../assets/noFrame.png';
import ImageKit from 'imagekit';
import { BASE_URL } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [orginalImage, setOrginalImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const [openImgCrop, setOpenImgCrop] = useState(false);


    const navigate = useNavigate();

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
        console.log("file 2023 eeeeeee",e);
        const file = e.target.files[0];
        setImageSrc('');
       console.log("file 2024",file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImageSrc(reader.result);
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }

        handleCroppedImage();
        // Reset the input value
        e.target.value = null;
    };

    const handleImageChange = async () => {
        
        if (selectedFile) {
            try {
                const response = await imagekit.upload({
                    file: selectedFile,
                    fileName: selectedFile.name,
                });
                console.log('Image URL:', response.url);
                setOrginalImage(response.url);
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
            setCroppedImage(response.url);
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
        setFrameColor(color === 'noFrame' ? 'transparent' : color);
        if (color !== 'noFrame') {
            applyTint(color);
            setPrice(sizePriceMap[selectedSize]);
        } else {
            setTintedImage(null); // Remove any tint
            setPrice(sizePriceMap[selectedSize] - 30);
        }
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

        handleCroppedImage();
    };

    const handleSizeSelection = (size) => {
         setSelectedSize(size);
         console.log("frameColor frameColor",frameColor);
         if(frameColor !== 'noFrame' && frameColor !== 'transparent'){
            setPrice(sizePriceMap[size]);
         }else{
            setPrice(sizePriceMap[size] - 30);
         }
        
        if (dimensionsData[size]) {
            const { width, height } = dimensionsData[size][orientation];
            resizeBoxes(width, height);
        }
    };

    const handleFrameSelection = (withFrame) => {
        const basePrice = sizePriceMap[selectedSize];
        setPrice(withFrame ? basePrice + 40 : basePrice - 30);
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
            case 'noFrame':
                return NoFrame;
            default:
                return '';
        }
    };

    console.log('Original Image URL:', orginalImage);

    const handleAddToCart = async () => {
        const userDataString = localStorage.getItem('user');
        const userData = userDataString ? JSON.parse(userDataString) : null;

        if (!userData || !userData.token) {
            toast.error('Please log in to add products to your cart.');
            return;
        }

        const token = userData.token;

        const requestBody = {
            dimension: selectedSize,
            frameColor: frameColor,
            orginalImage: orginalImage, // Assuming this is the selected image URL
            cropedImage: croppedImage, // Assuming this is the cropped image URL
            price: price.toFixed(2) // Using the selected price from the state
        };

        console.log(requestBody);

        try {
            const response = await fetch(`${BASE_URL}/cart/addtocart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(requestBody)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Item added to cart:', data);
                navigate('/MyCart')
                // Optionally reset state or provide feedback to the user
            } else {
                console.error('Failed to add item to cart:', response.statusText);
                // Optionally provide error feedback to the user
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
            // Optionally provide error feedback to the user
        }
    };

    const handleCroppedImage = () => {
        setOpenImgCrop(!openImgCrop)
    };

    return (
        <div className="container mx-auto p-4">
            <ToastContainer />
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
                            backgroundImage: frameColor === 'transparent' ? 'none' : `url(golden.webp)`,
                            backgroundColor: frameColor,
                            border: frameColor === 'transparent' ? 'none' : '2px solid lightgray',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div
                            id="innerBox"
                            className="rounded w-auto h-full bg-center bg-no-repeat bg-cover"
                            type="file"
                            style={{
                                backgroundImage: `url(${tintedImage || 'https://ik.imagekit.io/wdjnrplts/Cancraft/Untitled%20design_mNMdwxu9p.jpg?updatedAt=1719127929863'})`,
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
                        <div className="w-full md:w-2/3 p-2 hidden">
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
                            className="btn btn-secondary button-margin custom-crop-button mt-4 hidden"
                            onClick={() => { handleImageChange(); customCropImage(); }}
                        >
                            Custom Crop
                        </Button>
                    ) : null}
                </div>

                <div className="w-full md:w-1/3 p-2">
                    <div className="mb-4">
                        <h3>Select Frame Colour</h3>
                        {['black', 'gold', '#f7e7ce', 'white', 'noFrame'].map((color) => (
                            <label key={color} className="inline-block mr-2 frame-label">
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
                                    className="w-16 h-16 rounded cursor-pointer"
                                />
                                <span className="text-xs uppercase">
                                    {color === '#f7e7ce' ? 'champagne' : color === 'noFrame' ? 'No Frame' : color}
                                </span>
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
                            <Button className="btn btn-secondary button-margin custom-crop-button mt-4" onClick={() => { handleAddToCart(); }}>Add to cart</Button>

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

            <div className="mt-4 ">
                <div className="flex flex-wrap">
                    <div className="md:w-96 p-2 hidden md:block lg:block">
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
                    {/* <div className="w-full md:w-2/3 p-2">
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
                    </div> */}
                </div>
                {/* {selectedFile ? (
                    <Button
                        className="btn btn-secondary button-margin custom-crop-button mt-4"
                        onClick={() => { handleImageChange(); customCropImage(); }}
                    >
                        Custom Crop
                    </Button>
                ) : null} */}
            </div>



            {/* Log In */}
            <Dialog
                size="lg"
                open={openImgCrop}
                handler={handleCroppedImage}
                className="bg-transparent shadow-none"
                backdrop="static"
                keyboard={false}
            >
                <div className="flex justify-center items-center h-screen" >
                    <Card className="mx-auto w-full max-w-4xl">
                        <CardBody className="flex flex-col gap-4">
                            <div className="w-full p-4">
                                <div className="rounded shadow-md overflow-auto" style={{ maxHeight: '500px', maxWidth: '800px' }} >
                                    {imageSrc && (
                                        <img
                                            ref={imageRef}
                                            id="customInnerBox"
                                            className="rounded frame max-w-full max-h-full"
                                            src={imageSrc}
                                            alt="Custom Crop"
                                            style={{ maxHeight: '500px', maxWidth: '800px' }}
                                        />
                                    )}
                                </div>
                            </div> 
                        </CardBody>
                        <CardFooter className="flex justify-end pt-0">
                            {selectedFile ? (
                                <Button
                                    className="btn btn-secondary mt-4"
                                    onClick={() => { handleImageChange(); customCropImage(); }}
                                >
                                    Custom Crop
                                </Button>
                            ) : null}
                        </CardFooter>
                    </Card>
                </div>
            </Dialog>

        </div>



    );
}

export default Crop;
