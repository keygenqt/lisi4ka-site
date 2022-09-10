import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    ClickAwayListener,
    Collapse,
    Container,
    Divider,
    Fade,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
    Stack,
    Typography
} from "@mui/material";
import {
    ArrowDropDown,
    CloseOutlined,
    ExpandLess,
    ExpandMore,
    Extension,
    ListAltOutlined,
    MenuBookOutlined,
    MenuOutlined,
    PlayCircleOutlined,
    RssFeedOutlined,
    Settings,
    TranslateOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {ConstantImages} from "../../../base";

export function TopBarMenuElement(props) {

    const [isLogin, setIsLogin] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    // State menu list
    const [collapseState, setCollapseState] = React.useState(false);
    const [subMenuOpen, setSubMenuOpen] = React.useState(false);

    const handleClick = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <Stack className={'TopBarMenuElement'}>
            <Container maxWidth="lg">
                <Stack
                    direction={'row'}
                    spacing={3}
                    justifyContent='space-between'
                >
                    <Stack
                        className={'LogoBlock'}
                        direction={'row'}
                        spacing={1}
                    >
                        <ClickAwayListener onClickAway={() => {
                            setCollapseState(false);
                        }}>
                            <Box>
                                <Button
                                    className={'MenuButtonMD'}
                                    variant="outlined"
                                    onClick={() => {
                                        setCollapseState(!collapseState)
                                    }}
                                >
                                    {collapseState ? <CloseOutlined/> : <MenuOutlined/>}
                                </Button>

                                <Collapse className={'MenuCollapseMD'} in={collapseState} timeout={400} sx={{
                                    display: {
                                        md: 'none',
                                        sm: 'none'
                                    },
                                    zIndex: 50,
                                }}>

                                    <Paper elevation={0} sx={{
                                        borderRadius: 0
                                    }}>
                                        <List
                                            className={'MenuListMD'}
                                            sx={{width: '100%', bgcolor: 'background.paper'}}
                                            component="nav"
                                            aria-labelledby="nested-list-subheader"
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <ListAltOutlined/>
                                                </ListItemIcon>
                                                <ListItemText primary="Blog"/>
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <RssFeedOutlined/>
                                                </ListItemIcon>
                                                <ListItemText primary="Reviews"/>
                                            </ListItemButton>
                                            <ListItemButton onClick={handleClick}>
                                                <ListItemIcon>
                                                    <Extension/>
                                                </ListItemIcon>
                                                <ListItemText primary="Platform"/>
                                                {subMenuOpen ? <ExpandLess/> : <ExpandMore/>}
                                            </ListItemButton>

                                            <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItemButton sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <TranslateOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Words"/>
                                                    </ListItemButton>
                                                    <ListItemButton sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <MenuBookOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Books"/>
                                                    </ListItemButton>
                                                    <ListItemButton sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <PlayCircleOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Videos"/>
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>
                                        </List>
                                    </Paper>
                                </Collapse>
                            </Box>

                        </ClickAwayListener>

                        <Link to="/" className={'Logo'}>
                            <Typography variant="h5">
                                @lisi4ka
                            </Typography>
                        </Link>

                    </Stack>

                    <Stack
                        className={'MenuButtons'}
                        direction={'row'}
                        spacing={2}
                    >
                        <Stack
                            className={'MenuButtonsXL'}
                            direction={'row'}
                            spacing={2}
                        >
                            <Button className={'ButtonXL'}>Blog</Button>
                            <Button className={'ButtonXL'}>Reviews</Button>
                            <Button
                                className={'ButtonXL'}
                                startIcon={<Extension/>}
                                endIcon={<ArrowDropDown/>}
                                onClick={(event) => {
                                    setAnchorEl(event.currentTarget);
                                    event.stopPropagation();
                                    setOpen((previousOpen) => !previousOpen);
                                }}
                            >
                                Platform
                            </Button>
                        </Stack>

                        <Box sx={{
                            height: '37px'
                        }}>
                            {isLogin ? (
                                <Button
                                    endIcon={<Settings/>}
                                    startIcon={
                                        <Avatar
                                            alt={'Travis Howard'}
                                            src={ConstantImages.home.user2}
                                            sx={{width: 25, height: 25}}
                                        />
                                    }
                                    variant="outlined"
                                    onClick={() => {
                                        setIsLogin(false)
                                    }}
                                />
                            ) : (
                                <Button
                                    variant="outlined"
                                    onClick={() => {
                                        setIsLogin(true)
                                    }}
                                >
                                    Sign In
                                </Button>
                            )}
                        </Box>

                    </Stack>

                    <ClickAwayListener onClickAway={() => {
                        setOpen(false);
                    }}>
                        <Popper
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            transition
                            placement="bottom"
                            sx={{
                                zIndex: 1
                            }}
                            popperOptions={{
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [-0, 5]
                                        }
                                    }
                                ]
                            }}
                        >
                            {({TransitionProps}) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                        <Stack spacing={1} className={'MenuPopper'}>
                                            <Button startIcon={<TranslateOutlined/>}>
                                                Words
                                            </Button>
                                            <Divider/>
                                            <Button startIcon={<MenuBookOutlined/>}>
                                                Books
                                            </Button>
                                            <Divider/>
                                            <Button startIcon={<PlayCircleOutlined/>}>
                                                Videos
                                            </Button>
                                        </Stack>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </ClickAwayListener>
                </Stack>
            </Container>
        </Stack>
    );
}

TopBarMenuElement.propTypes = {};