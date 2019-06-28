const path = require('path');
// import {getNavArr} from './utils';

// const navArr = getNavArr();;

module.exports = {
    base: '/vuepress-blog/',
    title: "Luoxl's Blog",
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.ico' }],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                // $codes: path.resolve(__dirname, 'codes'),
            }
        },
    },
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Front-end', link: '/front-end/' },
            { text: 'Computer Science', link: '/computer/' },
            // ...navArr,
            { text: 'GitHub', link: 'https://github.com/luoxlgh/vuepress-blog-source' },
        ],
        sidebar: {
            '/front-end/': [
                {
                    title: 'Overview',
                    collapsable: false,
                    children: [
                        '',
                    ],
                },
                {
                    title: '工具',
                    collapsable: false,
                    children: [
                        'vuepress-build',
                    ],
                },
                {
                    title: '项目 - Netease',
                    collapsable: false,
                    children: [
                        'request',
                    ],
                },
            ],
            '/computer/': [
                {
                    title: 'Overview',
                    collapsable: false,
                    children: [
                        '',
                    ],
                },
                {
                    title: '算法',
                    collapsable: false,
                    children: [
                        'algorithm',
                        'backTracing',
                        'array',
                        'hash',
                        'dp',
                        'slidingWindow',
                        'search',
                        'string',
                        'robustness',
                        'conversion',
                        'others',
                    ],
                },
            ],
        },
    },
};
