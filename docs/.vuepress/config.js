const path = require('path');
// import {getNavArr} from './utils';

// const navArr = getNavArr();;

module.exports = {
    base: '/vuepressblog/',
    title: "Luoxl's Blog",
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.ico' }],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                assets: path.resolve(__dirname, 'assets'),
            }
        },
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Front-end', link: '/front-end/vuepress-build/' },
            // ...navArr,
            { text: 'GitHub', link: 'https://github.com/luoxlgh/vuepress-blog' },
        ],
        sidebar: {
            '/front-end/': [
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
        },
    },
};
