#### 创建项目 基本搭建
在创建之前，需要有一个git 仓库，我们要把项目搭建到git 中

##### 目录介绍
```
cd D:  // cd 到某个盘或文件夹
    mkdir workspace //创建workspace文件夹
    cd workspace
    /**
        workspace一般为我们仓库和项目总目录
            git@192.168.1.1 仓库一（前端自己项目，如果自己是前端leader）
            cd 仓库名称
            cd www.bdplus.cn 为上线文件夹
                ls // 查看有哪些文件
                pc或w 为 pc 电脑端项目
                h5或m  为h5 网页或app 中网页或公众号
                minstore 小程序(如果分微信和支付宝可wminstore tminstore)
                app 前端app 用户开发
                mkdown (一些备注文件)
                以下为正常开发项目，以上为对应上线打包后文件
                w
                h5
                minstore
                app
                mkdown
                如果有其他方式可自己组织
        git@2 仓库二 （其他项目比如后端等）
        git@3 仓库三
    */
```

##### 查看node 版本
```cmd
    node -v 或 使用nvm 进行node 版本安装与切换
    node 版本
    nvm use v14
        Now using node v14.15.3 (npm v6.14.9)
    node -v
        v14.15.3
    为了保证同步，选择node 版本14
```

#####  开始创建项目
```cmd
    yarn create react-app ts-first --template typescript

    官方标准命令，ts-first 为项目名称(PS：小写)
    ....
```

#####  git仓库提交
```cmd
    创建项目后要做git 提交  
    git add --all    git add .  或git add 一个个添加
    git commit -m '创建项目提交'
    git status 查看仓库文件状态
    PS:在企业中我们一般要 某个模块 某个功能某个页面等都需要 add 或commit
    一天 早 中晚 都分push 其他如果有上线，或领导要看代码等特殊情况可以push 否则不要太频繁
    为什么要早中晚，原因很简单，如果电脑跟屁了，你只需要补半天的代码就可以了。当然这是最致命一个问题
```
##### 进入项目目录
```cmd
    cd ts-first
```

##### 开启或释放配置
```cmd
    yarn eject
    注意如果上面你没有仓库  如果没有git 提交，这一步是不可能实现的
```
PS:
1.     发现package.json 内容前后是不一样的
2.     多了一个config 文件夹
3.     多了一个scripts文件夹
##### 项目启动
```cmd
    yarn start
```
运行ok 就可以了，但并没有完事
go on...

ctrl+c 后继续操作
##### 项目 sass（scss）安装
```cmd
yarn add node-sass-chokidar
yarn add npm-run-all
```
安装 node-sass-chokidar 需要多尝试几次，
如果三五次后还是报错，可尝试以下解决方案
```html
node -v
14 不建议使用node 16
1、npm install -g node-gyp
2、npm install --global --production windows-build-tools
ok 后
删除掉当前文件夹的node 包
rm -rf node_modules
重新yarn 或 npm install
ok后
再次执行yarn add node-sass-chokidar
基本就可以安装成功了
```

##### 修改package.json(替换 script 代码块 换成以下代码)
```json
"scripts": {
        "build-css": "node-sass-chokidar src/ -o src/",
        "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive  --use-polling --polling-interval 1000",
        "start-js": "node scripts/start.js",
        "start": "npm-run-all -p watch-css start-js",
        "build-js": "node scripts/build.js",
        "build": "npm-run-all build-css build-js",
        "test": "node scripts/test.js --env=jsdom"
},
```
##### yarn build 打包注意事项
```html
新建一个.env文件与package.json 同在根目录下
GENERATE_SOURCEMAP=false
以下三种路径
PUBLIC_URL=https://www.a.com/
PUBLIC_URL=./
PUBLIC_URL=/


正常代码如下：(会在后面上线具体再介绍)
GENERATE_SOURCEMAP=false
PUBLIC_URL=/
```

##### yarn start 启动项目
```html
1、创建文件夹
mkdir -p  src/styles/
2、创建一个scss 文件 并写点代码
vi src/styles/index.scss
```

##### vi index.js 打开文件
```js
ts-react/src/index.js
找到
import './index.css';
修改成
import './styles/index.css';
要引入src/styles/index.css
如果启动后项目会自动生成 index.css
那此时 就代表我们的创建项目第一节点算完成了，
```

```html
虽然看上步骤挺繁琐的，
但离我们真正创建项目完成还差好几步。
但这一步完成了我们就可以开始码代码了。
```
--------

** ctrl +c **

### 继续项目搭建


#### 设置代理
```html
你如何与后端开发进行开发联调的。
早期 的开发模式，基本上是根据后端的接口文档，前端这边模拟实现业务逻辑
想真正与数据库操作，基本上是要把代码发到开发服务器上。
中间有接口字段更改，这边都要在本地改完，再发布到服务器上测试
但现在已经不需要了
在本地就是可以时时对接后台开发接口
任何字段表更改，都可以在本地时时更改
所以如今天的本地开发，又是开发服务器，也是测试服务器，甚至可以是线上服务器
那具体怎么做？
```

##### 安装包
```cmd

yarn add http-proxy-middleware

yarn add axios

```

##### 新建文件
```js
vi
src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/home',createProxyMiddleware({
        target: 'https://#####.com/',
        changeOrigin: true,
      })
    );
    app.use(
      '/wp-json',createProxyMiddleware({
        target: 'https://#####.cn/',
        changeOrigin: true,
      })
    );
};

需要接口联调的可以单独找小主，有现在的接口
可以自己尝试接口
比如：
https://api.aaaa.com/home/mediareports?page_number=1&page_size=20

怎么配置
target 为 https://api.aaaa.com/ 域名
'/home'  为 域名后的第一级目录

/home/mediareports就是你接口的地址

?page_number=1&page_size=20就是接口的参数

早期 是在package.json 中直接修改代理开发
现在已经改成新src/setupProxy.js 文件了

可以增加多个接口
但app.use( 第一个参数 不能重复，也不能与域名有冲突

重要一点是，每次增加一个接口
一定要yarn start



```

```html
这样 我们的接口就会直接在本地调用了

类似nginx 跨域代理

```
```html
扩展知识点：
vue react 前端模拟路由  上线后其他页面刷新后404
如何解决
正常是需要在nginx 加一个代码就可以了

还有nginx 跨域如何实现
这个也会在后章节中上线的章节讲
```


```html
接上文，搭建路由，在企业中基本都是两个及以上的页面。
所以路由是必需的
```

#### 路由植入

##### 路由安装
```cmd
1、安装包
yarn add @types/react-router-dom;
react-router 分native 和 web 端
直接使用 web端
```

#### 新增加Router.tsx
```js
vi src/Router.tsx


import React from 'react';

import { BrowserRouter, HashRouter} from 'react-router-dom';

import App from './App.tsx';

const Router = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
export default Router;

这个js 目前作用就是管理路由模式一种是hash 一种是Browser

后期的mobx 或redux 可以直接在<App/> 入口注入
```

##### 修改index.tsx
```js
src/index.tsx

原来的 index.tsx 直接引入 App.tsx

如今多了一步

index.tsx--->Router.tsx--->App.tsx

引入 import Router from './Router';

使用
<Router />


import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```


##### 改造App.tsx
```tsx
import React, { Component } from 'react';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';
import Home from './views/Home';
import Test from './views/Test';

class App extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/test" component={Test} />
                <Redirect to="/"/>
            </Switch>
        )
    }
}
export default App;

```



####  这样启动项目就ok了


#### 页面创建
```jsx
增加一个页面流程还是一样的，还是修改原来的app.js

```


```html
把以上所有代码搭建好了之后，index.html
默认样式等全都搭建好后，可以提交到git 仓库中


这样后期直接 git cLone 下来以后，
直接删除掉里面的.git 或从仓库中移出来，
改个文件名字，直接npn install 或 yarn

就可以直接开始写项目了。

这样以后就不需要一步步配置了
可以直接git clone
yarn
就完整的项目就ok 了
```
