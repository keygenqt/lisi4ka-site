import {LanguageContext, NavigateContext, useLocalStorage, useWindowScroll} from "../../../base";
import {ValueType} from "../../../base/route/ValueType";
import {Box, Button, ClickAwayListener, Fade, Paper, Popper, Stack, Typography} from "@mui/material";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {TranslateOutlined} from "@mui/icons-material";

export function StrText(props) {

    // props
    const {
        items = [],
        action = 0,
        nextAction = 0,
        language = 'English',
        isInit = false,
        isPaused = true,
        textAlign = 'justify',
        onClick = () => {
        }
    } = props

    // hooks
    const darkMode = useLocalStorage("darkMode", ValueType.bool);
    const {t} = useContext(LanguageContext)
    const {route} = useContext(NavigateContext)
    const {y} = useWindowScroll()

    // states
    const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);
    const [itemSubMenu, setItemSubMenu] = useState(null);

    // effects
    useEffect(() => {
        setAnchorElSubMenu(null);
    }, [y]);

    return (
        <Box className={'VideoText'} sx={{
            textAlign: textAlign,
        }}>

            <ClickAwayListener onClickAway={() => {
                setAnchorElSubMenu(null);
            }}>
                <Popper
                    id={'MenuRightClick'}
                    open={Boolean(anchorElSubMenu)}
                    anchorEl={anchorElSubMenu}
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
                                    offset: [0, 10]
                                }
                            },
                        ]
                    }}
                >
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper sx={{p: 1}}>
                                <Stack spacing={0}>
                                    <Button
                                        sx={{
                                            padding: '6px 16px',
                                            ...(darkMode ? {color: '#fff'} : {})
                                        }}
                                        startIcon={<TranslateOutlined/>}
                                        onClick={() => {
                                            if (language === 'English') {
                                                route.openUrlNewTab(`https://translate.yandex.com/?lang=en-ru&text=${itemSubMenu.text}`)
                                            }
                                            if (language === 'Russian') {
                                                route.openUrlNewTab(`https://translate.yandex.com/?lang=ru-en&text=${itemSubMenu.text}`)
                                            }
                                            setAnchorElSubMenu(null);
                                        }}
                                    >
                                        <Box>
                                            {t('pages.video.t_video_tr_yandex')}
                                        </Box>
                                    </Button>
                                    <Button
                                        sx={(darkMode ? {color: '#fff'} : {})}
                                        startIcon={<TranslateOutlined/>}
                                        onClick={() => {
                                            if (language === 'English') {
                                                route.openUrlNewTab(`https://translate.google.com/?sl=en&tl=ru&op=translate&text=${itemSubMenu.text}`)
                                            }
                                            if (language === 'Russian') {
                                                route.openUrlNewTab(`https://translate.google.com/?sl=ru&tl=en&op=translate&text=${itemSubMenu.text}`)
                                            }
                                            setAnchorElSubMenu(null);
                                        }}
                                    >
                                        <Box>
                                            {t('pages.video.t_video_tr_google')}
                                        </Box>
                                    </Button>
                                </Stack>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </ClickAwayListener>

            {items.map((item, index) => <_TextItem
                key={index.toString()}
                index={index}
                item={item}
                action={action}
                nextAction={nextAction !== -1 && action === -1 ? nextAction : -1}
                language={language}
                isInit={isInit}
                isPaused={isPaused}
                onClick={() => {
                    if (isInit) {
                        onClick(index)
                    }
                }}
                onContextMenu={(e) => {
                    if (isInit) {
                        if (language === 'English' || language === 'Russian') {
                            function generateGetBoundingClientRect() {
                                return () => ({
                                    width: 0,
                                    height: 0,
                                    top: e.clientY,
                                    right: e.clientX,
                                    bottom: e.clientY,
                                    left: e.clientX,
                                });
                            }

                            const virtualElement = {
                                getBoundingClientRect: generateGetBoundingClientRect(),
                            };
                            setAnchorElSubMenu(virtualElement);
                            setItemSubMenu(item)
                            e.preventDefault();
                        }
                    }
                }}
            />)}
        </Box>
    )
}

StrText.propTypes = {
    items: PropTypes.array.isRequired,
    action: PropTypes.number.isRequired,
    nextAction: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    isInit: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    textAlign: PropTypes.oneOf(['justify', 'center', 'left']),
};

function _TextItem(props) {

    // props
    const {
        item,
        index,
        action,
        nextAction,
        isPaused,
        onClick,
        onContextMenu,
    } = props

    const darkMode = useLocalStorage("darkMode", ValueType.bool);

    const isAction = index === action
    const isNext = index === nextAction && index !== 0

    return (<Typography
        key={`item-${index}`}
        className={[(isPaused && isAction ? 'Pause' : ''), (isNext ? 'Next' : '')].join(' ')}
        sx={darkMode ? {
            backgroundColor: isAction ? '#dedede' : '#444444',
            color: isAction ? '#252525' : '#f1f1f1',
        } : {
            backgroundColor: isAction ? '#444444' : '#e9e9e9',
            color: isAction ? '#ffffff' : '#000000',
        }}
        onClick={onClick}
        onContextMenu={onContextMenu}
    >
        {item.text}
    </Typography>)
}