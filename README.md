# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目标功能
- [x] 首页
- [x] 商品详情页
- [x] 分类
- [x] 购物车
- [x] 个人中心

### 效果展示
![image](https://user-images.githubusercontent.com/69664984/117128309-d519b780-adcf-11eb-8869-4ea4829fd6e7.png) <br/>
![image](https://user-images.githubusercontent.com/69664984/117128418-f37fb300-adcf-11eb-8aeb-6e473547d1f7.png) <br/>
![image](https://user-images.githubusercontent.com/69664984/117271949-453a4300-ae8d-11eb-9494-7aea62218b2b.png) <br/>
![image](https://user-images.githubusercontent.com/69664984/117128469-05f9ec80-add0-11eb-955c-8462c367b70e.png)

### 项目布局
```
.
├── dist                                       // 项目打包路径
├── node_modules                               // webpack配置文件
├── public                                     // 公共文件
│   ├─favicon.ico                              // 项目ico图标
│   └─index.html                               // 项目打包时会以该文件为母板
└── src                                        // 源码目录
│   ├─assets                                   // 用于存放应用程序的资产文件
│   │  ├─css                                   // 公共样式
│   │  └─img                                   // 图片
│   ├─common                                   // 公共js文件
│   ├─components                               // 组件
│   │  ├─common                                // 公共组件
│   │  │  ├─gridView                           // 分类页面列表组件
│   │  │  ├─navbar                             // 顶部导航栏
│   │  │  ├─scroll                             // 滚动
│   │  │  ├─swiper                             // 轮播图
│   │  │  ├─tabbar                             // 底部导航栏子组件
│   │  │  └─toast                              // 插件
│   │  └─content                               // 内容组件
│   │      ├─backTop                           // 回到顶部
│   │      ├─goods                             // 商品组件
│   │      ├─Icon                              // icon图片
│   │      ├─mainTabbar                        // 底部导航栏组件
│   │      └─tabControl                        // 首页商品导航选择栏
│   ├─ network                                 // 公共js文件
│   ├─ router                                  // 路由文件夹
│   ├─ store                                   // 状态管理文件夹，vuex相关配置
│   ├─ views                                   // 所有的路由组件
│   │   ├─category                             // 分类页面
│   │   ├─detail                               // 详情页面
│   │   ├─home                                 // 主页
│   │   ├─profile                              // 个人页面
│   │   └─shopcart                             // 购物车页面
│   ├─ App.vue                                 // 应用组件，所有自己写的组件都是在这个组件之上运行
│   └─ main.js                                 // webpack入口文件
├─ package.json                                // 项目描述文件
└─ vue.config.js                               // 可选的配置文件，参见https://cli.vuejs.org/zh/config/
```
