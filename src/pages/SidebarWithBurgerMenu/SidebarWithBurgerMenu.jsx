import React, { useState, useEffect } from "react";
import {
    IconButton,
    List,
    ListItem,
    Drawer,
    Card,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export function SidebarWithBurgerMenu() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        setIsUserLoggedIn(!!userData); // If userData is not null, setIsUserLoggedIn to true
    }, []);

    return (
        <>
            <IconButton variant="text" size="lg" onClick={openDrawer}>
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                )}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    <List className="mt-10">
                        <Link to="/">
                            <ListItem component={Link} to="/">
                                Home
                            </ListItem>
                        </Link>
                        <Link to="/Crop">
                            <ListItem component={Link} to="/Crop">
                                Print Your Canvas
                            </ListItem>
                        </Link>
                        {/* <ListItem component={Link} to="/ArtGallery">
                            Art Gallery
                        </ListItem>
                        <ListItem component={Link} to="/WishList">
                            Wish List
                        </ListItem> */}

                        <>
                            <Link to="/MyOrder">
                                <ListItem component={Link} to="/MyOrder">
                                    My Order
                                </ListItem>
                            </Link>
                            <Link to="/MyCart">
                                <ListItem component={Link} to="/MyCart">
                                    My Cart
                                </ListItem>
                            </Link>
                        </>

                        <ListItem component={Link} to="/Help" onClick={handleOpen}>
                            Help
                        </ListItem>
                        {/* <ListItem component={Link} to="/Logout">
                            Log Out
                        </ListItem> */}
                    </List>
                </Card>
            </Drawer>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>GET IN TOUCH</DialogHeader>
                <DialogBody>
                    Contact us via Email or Whatsapp
                    Monday to Friday - 09:00 am to 5:00 pm
                    <div className="flex">
                        <CiMail className="w-4 h-4 mt-2" />
                        <span className="ml-2 mt-1">support@cancraftstudio.com</span>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <div className="flex">
                            <FaWhatsapp className="w-4 h-4" />
                            <span className="ml-1">+971566575191</span>
                        </div>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
