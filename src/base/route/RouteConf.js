import {Route} from "react-router-dom";
import {BaseLayout} from "../../layouts/base/BaseLayout";
import {
    AboutPage,
    ArticlePage,
    BlogPage,
    BookPage,
    BooksPage,
    HomePage,
    ReviewPage,
    VideoPage,
    VideosPage,
    YouTubePage,
} from "../../pages";
import * as React from "react";
import {ValueType} from "./ValueType";

export const RouteConf = {
    delay: 200,
    routes: {
        home: {
            path: '/',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            disablePadding={true}
                            pageClassName={'Home-Page'}
                        >
                            <HomePage/>
                        </BaseLayout>
                    }
                />
            }
        },
        blog: {
            path: '/blog',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            disablePadding={true}
                            pageClassName={'Blog-Page'}
                        >
                            <BlogPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        blogArticles: {
            path: '/blog/articles',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            disablePadding={true}
                            pageClassName={'Blog-Page'}
                        >
                            <BlogPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        blogReviews: {
            path: '/blog/reviews',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            disablePadding={true}
                            pageClassName={'Blog-Page'}
                        >
                            <BlogPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        article: {
            path: 'blog/article/:id',
            match: {
                id: ValueType.integer,
            },
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            isCenter={true}
                            pageClassName={'Article-Page'}
                        >
                            <ArticlePage/>
                        </BaseLayout>
                    }
                />
            }
        },
        review: {
            path: 'blog/review/:id',
            match: {
                id: ValueType.integer,
            },
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            isCenter={true}
                            pageClassName={'Review-Page'}
                        >
                            <ReviewPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        youtube: {
            path: '/youtube',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            disablePadding={true}
                            pageClassName={'YouTube-Page'}
                        >
                            <YouTubePage/>
                        </BaseLayout>
                    }
                />
            }
        },
        youtubeBooks: {
            path: '/youtube/books',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            disablePadding={true}
                            pageClassName={'YouTube-Page'}
                        >
                            <YouTubePage/>
                        </BaseLayout>
                    }
                />
            }
        },
        youtubeVideos: {
            path: '/youtube/videos',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            disablePadding={true}
                            pageClassName={'YouTube-Page'}
                        >
                            <YouTubePage/>
                        </BaseLayout>
                    }
                />
            }
        },
        youtubeVideo: {
            path: '/youtube/:id',
            match: {
                id: ValueType.integer,
            },
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            pageClassName={'Video-Page'}
                        >
                            <VideoPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        about: {
            path: '/about',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            disablePadding={true}
                            pageClassName={'About-Page'}
                        >
                            <AboutPage/>
                        </BaseLayout>
                    }
                />
            }
        }
    },
}