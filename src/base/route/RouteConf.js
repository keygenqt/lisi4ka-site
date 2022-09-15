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
    WordsPage,
} from "../../pages";
import * as React from "react";
import {RouteType} from "./RouteType";

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
                            isCenter={true}
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
                            isCenter={true}
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
                            isCenter={true}
                            pageClassName={'Blog-Page'}
                        >
                            <BlogPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        article: {
            path: '/article:id',
            match: {
                id: RouteType.integer,
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
            path: '/review/:id',
            match: {
                id: RouteType.integer,
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
        books: {
            path: '/books',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            isCenter={true}
                            pageClassName={'Books-Page'}
                        >
                            <BooksPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        book: {
            path: '/book/:id',
            match: {
                id: RouteType.integer,
            },
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            isCenter={true}
                            pageClassName={'Book-Page'}
                        >
                            <BookPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        videos: {
            path: '/videos',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            isCenter={true}
                            pageClassName={'Videos-Page'}
                        >
                            <VideosPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        video: {
            path: '/video/:id',
            match: {
                id: RouteType.integer,
            },
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            isCenter={true}
                            pageClassName={'Video-Page'}
                        >
                            <VideoPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        words: {
            path: '/words',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout
                            isCenter={true}
                            pageClassName={'Words-Page'}
                        >
                            <WordsPage/>
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