import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {Box, Container, Paper, Stack, Typography} from "@mui/material";
import {useParams} from "react-router";
import {BlogData} from "../blog/data/BlogData";
import {LanguageContext} from "../../base";
import emoji from 'remark-emoji';
import ReactMarkdown from 'react-markdown'
import {ErrorPage} from "../error/ErrorPage";

export function ArticlePage() {

    // id item from url params
    let {id} = useParams();
    const [data, setData] = useState(BlogData.find(x => x.id === parseInt(id)))

    // hooks
    const {t, isLocEn} = useContext(LanguageContext)

    // effects
    useEffect(() => {
        setData(BlogData.find(x => x.id === parseInt(id)))
    }, [id]);

    if (!data) {
        return (
            <ErrorPage/>
        )
    }

    return (
        <Stack>
            <Box className={'ArticleTitleHeader'} sx={{
                backgroundColor: 'secondary.main'
            }}>
                <Stack className={'Title'} spacing={3}>

                    <Container maxWidth={"md"}>
                        <Paper elevation={2} sx={{
                            overflow: 'hidden',
                            display: 'flex',
                            maxHeight: 350,
                            marginBottom: 7,
                            borderRadius: 4
                        }}>
                            <img
                                style={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                src={data.image}
                                alt={isLocEn ? data.title : data.title}
                                loading="lazy"
                            />
                        </Paper>

                        <Typography gutterBottom variant="h2" sx={{
                            marginBottom: 4
                        }}>
                            {isLocEn ? data.title : data.titleRu}
                        </Typography>

                        <Typography gutterBottom variant="subtitle2">
                            {t('pages.article.t_date')} {new Intl
                            .DateTimeFormat(isLocEn ? 'en-US' : 'ru-RU', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit',
                            })
                            .format(data.createAt)}
                        </Typography>
                    </Container>
                </Stack>
            </Box>

            <Container maxWidth="md">
                <ReactMarkdown
                    rehypePlugins={[emoji]}
                    className={"ArticleContent"}
                    skipHtml={false}
                    linkTarget={(href, children, title) => {
                        return `<a target={'_blank'} href=${href} >${title}</a>`
                    }}
                >
                    {isLocEn ? data.content : data.contentRu}
                </ReactMarkdown>
            </Container>
        </Stack>
    );
}

ArticlePage.propTypes = {};