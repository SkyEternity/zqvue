import Vue from 'vue'
import VueRouter from 'vue-router'
import content from './routers/content'
import user from './routers/user'
const con = require('./routers/ceshi')
//此处想将所有的router分开 然后使用import导入实现模块化 这样可以更方便的管理
Vue.use(VueRouter)
// require 和 import 区别
// 1. require 是webapck的方法 import是es6的方法
// 2. require 运行时调用可以运用到任何地方 import是编译时调用的必须放到文件的头部
// 3. require 是赋值过程，结果就是对象，数字，字符串，函数等，把其结果赋给某个变量 搭配 module.exports 使用
//    import  是解构过程，将es6转化为es5在执行的，import语法会被转码为require  搭配 export default 使用
// console.log(content);
// console.log(con.xx);
const routes = [
    { path: '/404', redirect: '/' }, //重定项
    //首页
    { 
        path: '/', 
        name: 'index', 
        //vue-loader的版本原因 新版需要加 default
        component: require('./views/index/Index.vue').default,
        children: [
            // content 路由
            ...content,
            // user路由
            ...user
        ]
    },
]
const router = new VueRouter({
    base: '/view',
    mode: 'history', 
    //主要是可以使用history.pushState()方法 这个再不刷新浏览器的情况下，创建新的浏览记录并插入浏览记录队列里面
    //但是也需要后端的支持 因为是单页面客户端应用，如果直接访问 xx.com/user/id 就会返回404。所以应该设置一个base界面
    // scrollBehavior,
    routes
})
export default router