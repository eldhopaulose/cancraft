// import React, { useState, useEffect } from "react";
// import {
//     Navbar,
//     MobileNav,
//     Button,
//     IconButton,
//     Card,
//     CardBody,
//     Typography,
//     CardFooter,
//     Dialog,
//     Input,
// } from "@material-tailwind/react";
// import Logo from "../../assets/cancraft-logo-black.png";
// import { BASE_URL } from "../../constants/constants";
// import { SidebarWithBurgerMenu } from "../SidebarWithBurgerMenu/SidebarWithBurgerMenu";


// //
// import { MdOutlineWifiCalling3 } from "react-icons/md";

// export function Nav() {
//     const [openNav, setOpenNav] = useState(false);
//     const [open, setOpen] = useState(false);
//     const [openLogin, setOpenLogin] = useState(false);
//     const [signInData, setSignInData] = useState({ name: '', email: '', password: '' });
//     const [loginData, setLoginData] = useState({ email: '', password: '' });
//     const [user, setUser] = useState({name:"Nasar"});
//     const [signUpError, setSignUpError] = useState('');
//     const [loginError, setLoginError] = useState('');

//     useEffect(() => {
//         window.addEventListener(
//             "resize",
//             () => window.innerWidth >= 960 && setOpenNav(false),
//         );
//         const userDataString = localStorage.getItem('user');
//         if (userDataString) {
//             const userData = JSON.parse(userDataString);
//             setUser(userData);
//         }
//     }, []);

//     const handleOpen = () => setOpen(!open);
//     const handleOpenLogin = () => setOpenLogin(!openLogin);

//     const handleInputChange = (e, setData) => {
//         const { name, value } = e.target;
//         setData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSignIn = async () => {
//         try {
//             const response = await fetch(`${BASE_URL}/user/register`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(signInData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 localStorage.setItem('user', JSON.stringify(data));
//                 setUser(data);
//                 handleOpen();
//                 setSignUpError(''); // Clear any previous error message
//             } else {
//                 setSignUpError(data.error); // Set the error message
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setSignUpError('An error occurred. Please try again.'); // Set a generic error message
//         }
//     };

//     const handleLogin = async () => {
//         try {
//             const response = await fetch(`${BASE_URL}/user/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(loginData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 localStorage.setItem('user', JSON.stringify(data));
//                 setUser(data);
//                 handleOpenLogin();
//                 setLoginError(''); // Clear any previous error message
//             } else {
//                 setLoginError(data.error); // Set the error message
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setLoginError('An error occurred. Please try again.'); // Set a generic error message
//         }
//     };

//     return (
//         <div>
//         <div className="flex items-center justify-between px-4 py-2 lg:px-8 lg:py-4 bg-white shadow-md">
//             {/* SidebarWithBurgerMenu Component */}
//             <div className="flex-1 flex items-center">
//                 <SidebarWithBurgerMenu />
//                 {user && (
//                 <Typography variant="h6" color="blue-gray" className="ml-5 hidden lg:block">
//                     Welcome, {user.name}!
//                 </Typography>
//             )}

// <IconButton
//                 variant="outlined"
//                 className="rounded-full p-2 bg-gray-100 text-gray-800 border border-gray-400 ml-20 "
//             >
//                 <MdOutlineWifiCalling3 size={24} />
//             </IconButton>

//             <Typography variant="h7" color="blue-gray" className="ml-2 hidden lg:block">
//                 9995157790
//             </Typography>
//             </div>
 
//             {/* Centered Logo */}
//             <div className="flex-1 flex justify-center">
//                 <img className="h-20" src={Logo} alt="logo" />
//             </div>
            
//             {/* Right Aligned Buttons */}
//             <div className="flex-1 flex justify-end items-center space-x-4">
//                 {/* {user ? (
//                     <Typography variant="h6" color="blue-gray">
//                         Welcome, {user.name}!
//                     </Typography>
//                 ) : ( */}
//                     <>
//                         <Button
//                             variant="text"
//                             size="sm"
//                             className="hidden lg:inline-block"
//                             onClick={handleOpenLogin}
//                         >
//                             <span>Log In</span>
//                         </Button>
//                         <Button
//                             variant="gradient"
//                             size="sm"
//                             className="hidden lg:inline-block"
//                             onClick={handleOpen}
//                         >
//                             <span>Sign Up</span>
//                         </Button>
                      
//                         <IconButton
//                             variant="text"
//                             className="h-6 w-6 text-inherit lg:hidden"
//                             ripple={false}
//                             onClick={() => setOpenNav(!openNav)}
//                         >
//                             {openNav ? (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     className="h-6 w-6"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-6 w-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 </svg>
//                             )}
//                         </IconButton>
//                     </>
//                  {/* )} */}
//             </div>
//         </div>
    
//         {!user && (
//             <MobileNav open={openNav}>
//                 <div className="flex flex-col items-center gap-4">
//                     <Button fullWidth variant="text" size="sm" onClick={handleOpenLogin}>
//                         <span>Log In</span>
//                     </Button>
//                     <Button fullWidth variant="gradient" size="sm" onClick={handleOpen}>
//                         <span>Sign Up</span>
//                     </Button>
//                 </div>
//             </MobileNav>
//         )}
    
//         {/* Sign In */}
//         <Dialog
//             size="xs"
//             open={open}
//             handler={handleOpen}
//             className="bg-transparent shadow-none"
//         >
//             <Card className="mx-auto w-full max-w-[24rem]">
//                 <CardBody className="flex flex-col gap-4">
//                     <Typography variant="h4" color="blue-gray">
//                         Sign Up
//                     </Typography>
//                     <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
//                         Enter your email and password to Sign In.
//                     </Typography>
//                     <Typography className="-mb-2" variant="h6">
//                         Your Name
//                     </Typography>
//                     <Input
//                         label="Name"
//                         size="lg"
//                         name="name"
//                         value={signInData.name}
//                         onChange={(e) => handleInputChange(e, setSignInData)}
//                     />
//                     <Typography className="-mb-2" variant="h6">
//                         Your Email
//                     </Typography>
//                     <Input
//                         label="Email"
//                         size="lg"
//                         name="email"
//                         value={signInData.email}
//                         onChange={(e) => handleInputChange(e, setSignInData)}
//                     />
//                     <Typography className="-mb-2" variant="h6">
//                         Your Password
//                     </Typography>
//                     <Input
//                         label="Password"
//                         size="lg"
//                         type="password"
//                         name="password"
//                         value={signInData.password}
//                         onChange={(e) => handleInputChange(e, setSignInData)}
//                     />
//                     {signUpError && (
//                         <Typography variant="small" color="red" className="text-red-600">
//                             {signUpError}
//                         </Typography>
//                     )}
//                 </CardBody>
//                 <CardFooter className="pt-0">
//                     <Button variant="gradient" onClick={handleSignIn} fullWidth>
//                         Sign Up
//                     </Button>
//                 </CardFooter>
//             </Card>
//         </Dialog>
    
//         {/* Log In */}
//         <Dialog
//             size="xs"
//             open={openLogin}
//             handler={handleOpenLogin}
//             className="bg-transparent shadow-none"
//         >
//             <Card className="mx-auto w-full max-w-[24rem]">
//                 <CardBody className="flex flex-col gap-4">
//                     <Typography variant="h4" color="blue-gray">
//                         Log In
//                     </Typography>
//                     <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
//                         Enter your email and password to Log In.
//                     </Typography>
//                     {loginError && (
//                         <Typography variant="small" color="red" className="text-red-600">
//                             {loginError}
//                         </Typography>
//                     )}
//                     <Typography className="-mb-2" variant="h6">
//                         Your Email
//                     </Typography>
//                     <Input
//                         label="Email"
//                         size="lg"
//                         name="email"
//                         value={loginData.email}
//                         onChange={(e) => handleInputChange(e, setLoginData)}
//                     />
//                     <Typography className="-mb-2" variant="h6">
//                         Your Password
//                     </Typography>
//                     <Input
//                         label="Password"
//                         size="lg"
//                         type="password"
//                         name="password"
//                         value={loginData.password}
//                         onChange={(e) => handleInputChange(e, setLoginData)}
//                     />
//                     {loginError && (
//                         <Typography variant="small" color="red" className="text-red-600">
//                             {loginError}
//                         </Typography>
//                     )}
//                 </CardBody>
//                 <CardFooter className="pt-0">
//                     <Button variant="gradient" onClick={handleLogin} fullWidth>
//                         Log In
//                     </Button>
//                 </CardFooter>
//             </Card>
//         </Dialog>
//     </div>
    
//     );
// }

// export default Nav;
