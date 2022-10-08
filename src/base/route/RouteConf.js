import {Route} from "react-router-dom";
import {BaseLayout} from "../../layouts/base/BaseLayout";
import {AboutPage, ArticlePage, BlogPage, HomePage, VideoPage, VideosPage,} from "../../pages";
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
                            <BlogPage
                                type={'articles'}
                            />
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
                            <BlogPage
                                type={'reviews'}
                            />
                        </BaseLayout>
                    }
                />
            }
        },
        post: {
            path: 'blog/:id',
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
                            disablePadding={true}
                            pageClassName={'Article-Page'}
                        >
                            <ArticlePage/>
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
                            disablePadding={true}
                            pageClassName={'Videos-Page'}
                        >
                            <VideosPage/>
                        </BaseLayout>
                    }
                />
            }
        },
        video: {
            path: '/videos/:id',
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
                            disablePadding={true}
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