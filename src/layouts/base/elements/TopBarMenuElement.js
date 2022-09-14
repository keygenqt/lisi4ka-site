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
import {ConstantImages, LanguageContext, NavigateContext, useWindowResize} from "../../../base";

export function TopBarMenuElement(props) {

    const {t} = useContext(LanguageContext)
    const {route, routes} = useContext(NavigateContext)

    const [isLogin, setIsLogin] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const sizeWindow = useWindowResize()

    // State menu list
    const [collapseState, setCollapseState] = React.useState(false);
    const [subMenuOpen, setSubMenuOpen] = React.useState(false);

    const handleClick = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    useEffect(() => {
        setOpen(false)
    }, [sizeWindow])

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
                                            <ListItemButton onClick={() => {
                                                setCollapseState(false)
                                                route.toLocation(routes.blogArticles)
                                            }}>
                                                <ListItemIcon>
                                                    <ListAltOutlined/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_blog')}/>
                                            </ListItemButton>
                                            <ListItemButton onClick={() => {
                                                setCollapseState(false)
                                                route.toLocation(routes.blogReviews)
                                            }}>
                                                <ListItemIcon>
                                                    <RssFeedOutlined/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_reviews')}/>
                                            </ListItemButton>
                                            <ListItemButton onClick={handleClick}>
                                                <ListItemIcon>
                                                    <Extension/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_platform')}/>
                                                {subMenuOpen ? <ExpandLess/> : <ExpandMore/>}
                                            </ListItemButton>

                                            <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItemButton sx={{pl: 4}} onClick={() => {
                                                        setCollapseState(false)
                                                        route.toLocation(routes.words)
                                                    }}>
                                                        <ListItemIcon>
                                                            <TranslateOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary={t('layouts.header.t_words')}/>
                                                    </ListItemButton>
                                                    <ListItemButton sx={{pl: 4}} onClick={() => {
                                                        setCollapseState(false)
                                                        route.toLocation(routes.books)
                                                    }}>
                                                        <ListItemIcon>
                                                            <MenuBookOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary={t('layouts.header.t_books')}/>
                                                    </ListItemButton>
                                                    <ListItemButton sx={{pl: 4}} onClick={() => {
                                                        setCollapseState(false)
                                                        route.toLocation(routes.videos)
                                                    }}>
                                                        <ListItemIcon>
                                                            <PlayCircleOutlined/>
                                                        </ListItemIcon>
                                                        <ListItemText primary={t('layouts.header.t_video')}/>
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
                                {t('layouts.header.t_title')}
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
                            <Button onClick={() => {
                                route.toLocation(routes.blogArticles)
                            }}>
                                {t('layouts.header.t_blog')}
                            </Button>
                            <Button onClick={() => {
                                route.toLocation(routes.blogReviews)
                            }}>
                                {t('layouts.header.t_reviews')}
                            </Button>
                            <Button
                                startIcon={<Extension/>}
                                endIcon={<ArrowDropDown/>}
                                onClick={(event) => {
                                    setAnchorEl(event.currentTarget);
                                    event.stopPropagation();
                                    setOpen((previousOpen) => !previousOpen);
                                }}
                            >
                                {t('layouts.header.t_platform')}
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
                                            <Button startIcon={<TranslateOutlined/>} onClick={() => {
                                                setOpen(false)
                                                route.toLocation(routes.words)
                                            }}>
                                                {t('layouts.header.t_words')}
                                            </Button>
                                            <Divider/>
                                            <Button startIcon={<MenuBookOutlined/>} onClick={() => {
                                                setOpen(false)
                                                route.toLocation(routes.books)
                                            }}>
                                                {t('layouts.header.t_books')}
                                            </Button>
                                            <Divider/>
                                            <Button startIcon={<PlayCircleOutlined/>} onClick={() => {
                                                setOpen(false)
                                                route.toLocation(routes.videos)
                                            }}>
                                                {t('layouts.header.t_video')}
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