export default [
    {
        path: '/content',
        //可以在打包的时候进行代码分片，并异步加载分片后的代码，此方法在官方中是不建议使用的
        // component: resolve => {
        //     require.ensure([], () => {
        //         resolve(require('../views/content/Main.vue'))
        //     })
        // },
        component: require('../views/content/Main.vue').default,
        // component: import('../views/content/Main.vue').default,
        
        children: [
            {
                path: 'now',
                name: 'content-now',
                // component: resolve => {
                //     require.ensure([], () => {
                //         resolve(require('../views/content/Now.vue'))
                //     })
                // },
                component: require('../views/content/Now.vue').default,
                // component: import('../views/content/Now.vue').default,
            },
            {
                path: 'future',
                name: 'content-future',
                component: require('../views/content/Future.vue').default
            },
            {
                path: 'before',
                name: 'content-before',
                component: require('../views/content/Before.vue').default
            }
        ]
    }
]