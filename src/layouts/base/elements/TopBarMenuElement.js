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

    const handleClickSubMenuBlog = () => {
        setSubMenuOpenBlog(!subMenuOpenBlog);
    };

    useEffect(() => {
        setOpenBlog(false)
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

                                            {/* YouTube */}
                                            <ListItemButton onClick={() => {
                                                setCollapseState(false)
                                                route.toLocation(routes.videos)
                                            }}>
                                                <ListItemIcon>
                                                    <YouTube/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_videos')}/>
                                            </ListItemButton>

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
                            {/* About */}
                            <Button onClick={() => {
                                route.toLocation(routes.about)
                            }}>
                                {t('layouts.header.t_about')}
                            </Button>

                            {/* Videos */}
                            <Button onClick={() => {
                                route.toLocation(routes.videos)
                            }}>
                                {t('layouts.header.t_videos')}
                            </Button>

                            {/* Blog */}
                            <Button
                                startIcon={<ReceiptLong/>}
                                endIcon={<ArrowDropDown/>}
                                onClick={(event) => {
                                    setAnchorElBlog(event.currentTarget);
                                    event.stopPropagation();
                                    setOpenBlog((previousOpen) => !previousOpen);
                                }}
                            >
                                {t('layouts.header.t_blog')}
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