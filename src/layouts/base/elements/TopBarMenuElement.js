import * as React from 'react';
import {useContext, useEffect} from 'react';
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
    BookOutlined,
    CloseOutlined,
    ExpandLess,
    ExpandMore,
    MenuOutlined,
    PlayCircleOutline,
    YouTube,
    ReceiptLong,
    ReceiptOutlined,
    Settings,
    TranslateOutlined, OndemandVideoOutlined, Face3Outlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {ConstantImages, LanguageContext, NavigateContext, useLocalStorage, useWindowResize} from "../../../base";
import {ValueType} from "../../../base/route/ValueType";

export function TopBarMenuElement(props) {

    const darkMode = useLocalStorage("darkMode", ValueType.bool);
    const {t} = useContext(LanguageContext)
    const {route, routes} = useContext(NavigateContext)

    const [isLogin, setIsLogin] = React.useState(false);

    const sizeWindow = useWindowResize()

    // State menu list
    const [collapseState, setCollapseState] = React.useState(false);
    const [subMenuOpenBlog, setSubMenuOpenBlog] = React.useState(false);
    const [subMenuOpenYouTube, setSubMenuOpenYouTube] = React.useState(false);

    // menu blog
    const [openBlog, setOpenBlog] = React.useState(false);
    const [anchorElBlog, setAnchorElBlog] = React.useState(null);
    const canBeOpenBlog = openBlog && Boolean(anchorElBlog);
    const idBlog = canBeOpenBlog ? 'transition-popper' : undefined;

    const [openYouTube, setOpenYouTube] = React.useState(false);
    const [anchorElYouTube, setAnchorElYouTube] = React.useState(null);
    const canBeOpenYouTube = openYouTube && Boolean(anchorElYouTube);
    const idYouTube = canBeOpenYouTube ? 'transition-popper' : undefined;

    const handleClickSubMenuBlog = () => {
        setSubMenuOpenBlog(!subMenuOpenBlog);
    };

    const handleClickSubMenuYouTube = () => {
        setSubMenuOpenYouTube(!subMenuOpenYouTube);
    };

    useEffect(() => {
        setOpenBlog(false)
        setOpenYouTube(false)
    }, [sizeWindow])

    return (
        <Stack className={'TopBarMenuElement'}>
            <Container maxWidth="lg">
                <Stack
                    className={'LogoBlock'}
                    direction={'row'}
                    spacing={3}
                    justifyContent='space-between'
                >
                    <Stack
                        direction={'row'}
                        spacing={1}
                        justifyContent='space-between'
                    >
                        <Link to="/" className={'Logo'}>
                            <Typography variant="h5">
                                {t('layouts.header.t_title')}
                            </Typography>
                        </Link>

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
                                            <ListItemButton onClick={handleClickSubMenuYouTube}>
                                                <ListItemIcon>
                                                    <YouTube/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_youtube')}/>
                                                {subMenuOpenYouTube ? <ExpandLess/> : <ExpandMore/>}
                                            </ListItemButton>

                                            <Collapse in={subMenuOpenYouTube} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>

                                                    <ListItemButton sx={{pl: 4}} onClick={() => {
                                                        setCollapseState(false)
                                                        route.toLocation(routes.youtubeBooks)
                                                    }}>
                                                        <ListItemIcon>
                                                            <BookOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary={t('layouts.header.t_books')}/>
                                                    </ListItemButton>
                                                    <ListItemButton sx={{pl: 4}} onClick={() => {
                                                        setCollapseState(false)
                                                        route.toLocation(routes.youtubeVideos)
                                                    }}>
                                                        <ListItemIcon>
                                                            <OndemandVideoOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary={t('layouts.header.t_videos')}/>
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>

                                            <ListItemButton onClick={handleClickSubMenuBlog}>
                                                <ListItemIcon>
                                                    <ReceiptLong/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_blog')}/>
                                                {subMenuOpenBlog ? <ExpandLess/> : <ExpandMore/>}
                                            </ListItemButton>

                                            <Collapse in={subMenuOpenBlog} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>

                                                    <ListItemButton sx={{pl: 4}} onClick={() => {
                                                        setCollapseState(false)
                                                        route.toLocation(routes.blogArticles)
                                                    }}>
                                                        <ListItemIcon>
                                                            <ReceiptOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary={t('layouts.header.t_articles')}/>
                                                    </ListItemButton>
                                                    <ListItemButton sx={{pl: 4}} onClick={() => {
                                                        setCollapseState(false)
                                                        route.toLocation(routes.blogReviews)
                                                    }}>
                                                        <ListItemIcon>
                                                            <TranslateOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary={t('layouts.header.t_reviews')}/>
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>

                                            {/* About */}
                                            <ListItemButton onClick={() => {
                                                setCollapseState(false)
                                                route.toLocation(routes.about)
                                            }}>
                                                <ListItemIcon>
                                                    <Face3Outlined/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_about')}/>
                                            </ListItemButton>
                                        </List>
                                    </Paper>
                                </Collapse>
                            </Box>

                        </ClickAwayListener>

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
                            {/* YouTube */}
                            <Button
                                startIcon={<YouTube/>}
                                endIcon={<ArrowDropDown/>}
                                onClick={(event) => {
                                    setAnchorElYouTube(event.currentTarget);
                                    event.stopPropagation();
                                    setOpenYouTube((previousOpen) => !previousOpen);
                                    setOpenBlog(false)
                                }}
                            >
                                {t('layouts.header.t_youtube')}
                            </Button>

                            {/* Blog */}
                            <Button
                                startIcon={<ReceiptLong/>}
                                endIcon={<ArrowDropDown/>}
                                onClick={(event) => {
                                    setAnchorElBlog(event.currentTarget);
                                    event.stopPropagation();
                                    setOpenBlog((previousOpen) => !previousOpen);
                                    setOpenYouTube(false)
                                }}
                            >
                                {t('layouts.header.t_blog')}
                            </Button>

                            {/* About */}
                            <Button onClick={() => {
                                route.toLocation(routes.about)
                            }}>
                                {t('layouts.header.t_about')}
                            </Button>
                        </Stack>

                        <Box sx={{
                            height: '37px',
                            display: 'none'
                        }}>
                            {isLogin ? (
                                <Button
                                    endIcon={<Settings/>}
                                    startIcon={
                                        <Avatar
                                            alt={'Travis Howard'}
                                            src={ConstantImages.home.user2}
                                            sx={{width: 24, height: 24}}
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
                                    {t('layouts.header.t_sign_in')}
                                </Button>
                            )}
                        </Box>

                    </Stack>

                    <ClickAwayListener onClickAway={() => {
                        setOpenYouTube(false);
                    }}>
                        <Popper
                            id={idYouTube}
                            open={openYouTube}
                            anchorEl={anchorElYouTube}
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

                                            <Button
                                                sx={darkMode ? {color: '#fff'} : {}}
                                                startIcon={<BookOutlined/>}
                                                onClick={() => {
                                                    setOpenYouTube(false)
                                                    route.toLocation(routes.youtubeBooks)
                                                }}
                                            >
                                                <Box>
                                                    {t('layouts.header.t_books')}
                                                </Box>
                                            </Button>
                                            <Divider/>
                                            <Button
                                                sx={(darkMode ? {color: '#fff'} : {})}
                                                startIcon={<OndemandVideoOutlined/>}
                                                onClick={() => {
                                                    setOpenYouTube(false)
                                                    route.toLocation(routes.youtubeVideos)
                                                }}
                                            >
                                                <Box>
                                                    {t('layouts.header.t_videos')}
                                                </Box>
                                            </Button>
                                        </Stack>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={() => {
                        setOpenBlog(false);
                    }}>
                        <Popper
                            id={idBlog}
                            open={openBlog}
                            anchorEl={anchorElBlog}
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
                                            <Button
                                                sx={darkMode ? {color: '#fff'} : {}}
                                                startIcon={<ReceiptOutlined/>}
                                                onClick={() => {
                                                    setOpenBlog(false)
                                                    route.toLocation(routes.blogArticles)
                                                }}
                                            >
                                                <Box>
                                                    {t('layouts.header.t_articles')}
                                                </Box>
                                            </Button>
                                            <Divider/>
                                            <Button
                                                sx={(darkMode ? {color: '#fff'} : {})}
                                                startIcon={<TranslateOutlined/>}
                                                onClick={() => {
                                                    setOpenBlog(false)
                                                    route.toLocation(routes.blogReviews)
                                                }}
                                            >
                                                <Box>
                                                    {t('layouts.header.t_reviews')}
                                                </Box>
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