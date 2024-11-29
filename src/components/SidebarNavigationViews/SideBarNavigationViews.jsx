/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloudIcon from '@mui/icons-material/Cloud';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import useSidebarNavigationViews from './hooks/useSidebarNavigationViews';

import { RenderAppsView } from '../CurrentAppsViews/Render/RenderAppsView';
import { MyProfile } from '../MyProfile/MyProfile'
import { GeneralView } from '../GeneralView/GeneralView'

const drawerWidth = 240;


const SideBarNavigationViews = (props) => {
    const { currentViewSelected, closeSession, sidebarNavigationHandler } = useSidebarNavigationViews()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar />
            <Typography mb={5} variant="h4" color="initial" textAlign={'center'}>Menu</Typography>
            <Divider />
            <List>

                <List>
                    {['Home', 'Profile', 'Onboard Cloud Account', 'Render Apps', 'AWS Apps', 'Azure Apps'].map((text, index) => (
                        <React.Fragment key={text}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={sidebarNavigationHandler}>
                                    <ListItemIcon>
                                        {index === 0 ? <AccountBoxIcon /> : <CloudIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                            {/* Add a Divider after each item except the last one */}
                            {index < 3 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
                <Divider />

                <ListItem disablePadding>
                    <ListItemButton onClick={closeSession}>
                        <ListItemIcon>

                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary='Log out' />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />

        </div>
    );



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        CLOUD DEPLOYMENT MANAGER, KEEP YOUR APPS UP :)
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="Apps services"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {currentViewSelected.generalView ? <GeneralView /> : ""}
                {currentViewSelected.profileView ? <MyProfile /> : ""}
                {currentViewSelected.renderView ? <RenderAppsView /> : ""}
                {/* {/* {currentViewSelected.awsView ? <RenderAppsView /> : ""} */}



            </Box>
        </Box>
    );
}



export default SideBarNavigationViews