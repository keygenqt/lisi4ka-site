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
    ReceiptLong,
    ReceiptOutlined,
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
                                            {/* Books */}
                                            <ListItemButton onClick={() => {
                                                setCollapseState(false)
                                                route.toLocation(routes.books)
                                            }}>
                                                <ListItemIcon>
                                                    <BookOutlined/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_books')}/>
                                            </ListItemButton>

                                            {/* Videos */}
                                            <ListItemButton onClick={() => {
                                                setCollapseState(false)
                                                route.toLocation(routes.videos)
                                            }}>
                                                <ListItemIcon>
                                                    <PlayCircleOutline/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_videos')}/>
                                            </ListItemButton>

                                            <ListItemButton onClick={handleClick}>
                                                <ListItemIcon>
                                                    <ReceiptLong/>
                                                </ListItemIcon>
                                                <ListItemText primary={t('layouts.header.t_blog')}/>
                                                {subMenuOpen ? <ExpandLess/> : <ExpandMore/>}
                                            </ListItemButton>

                                            <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
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
                            {/* Books */}
                            <Button onClick={() => {
                                route.toLocation(routes.books)
                            }}>
                                {t('layouts.header.t_books')}
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
                                    setAnchorEl(event.currentTarget);
                                    event.stopPropagation();
                                    setOpen((previousOpen) => !previousOpen);
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
                                            <Button startIcon={<ReceiptOutlined/>} onClick={() => {
                                                setOpen(false)
                                                route.toLocation(routes.blogArticles)
                                            }}>
                                                <Box>
                                                    {t('layouts.header.t_articles')}
                                                </Box>
                                            </Button>
                                            <Divider/>
                                            <Button startIcon={<TranslateOutlined/>} onClick={() => {
                                                setOpen(false)
                                                route.toLocation(routes.blogReviews)
                                            }}>
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