import React from "react";
import {
    IconButton,
    List,
    ListItem,
    Drawer,
    Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export function SidebarWithBurgerMenu() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

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
                    <List>
                        <ListItem component={Link} to="/">
                            Home
                        </ListItem>
                        <ListItem component={Link} to="/Crop">
                            Print Your Canvas
                        </ListItem>
                        <ListItem component={Link} to="/ArtGallery">
                            Art Gallery
                        </ListItem>
                        <ListItem component={Link} to="/WishList">
                            Wish List
                        </ListItem>
                        <ListItem component={Link} to="/MyOrder">
                            My Order
                        </ListItem>
                        <ListItem component={Link} to="/Cart">
                            Cart
                        </ListItem>
                        <ListItem component={Link} to="/Help">
                            Help
                        </ListItem>
                        <ListItem component={Link} to="/Logout">
                            Log Out
                        </ListItem>
                    </List>
                </Card>
            </Drawer>
        </>
    );
}
