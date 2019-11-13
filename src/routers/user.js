export default [
    {
        path: '/user',
        component: require('../views/user/Main.vue').default,
        children: [
            {
                path: 'user',
                name: 'user',
                component: require('../views/user/User.vue').default
            }
        ]
    }
]