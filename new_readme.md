##### 查看node 版本
```cmd
node v16.17.0
```
#####  开始创建ts项目
```cmd
npx create-react-app react-tpl-ssr --template typescript
```
#####  git仓库提交 开启配置
```cmd
git status
git add --all
git commit -m 'init'
```
##### 项目 sass（scss）安装
```cmd
yarn add node-sass@npm:dart-sass
yarn add dart-sass
yarn add npm-run-all
```

```json
"scripts": {
    "build-css": "dart-sass src/",
    "watch-css": "npm run build-css && dart-sass src/ --watch",
    "start-js": "node scripts/start.js",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "node scripts/build.js",
    "serve": "node server/bundle.js",
    "build": "npm-run-all build-css build-js",
    "test": "node scripts/test.js --env=jsdom"
  },
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

##### ssr
```cmd
https://github.com/antonybudianto/cra-universal
# Install new cra-universal
yarn add -D cra-universal

# Install peer dependency
yarn add @cra-express/core express@4.18.1

# init custom server (optional)
yarn run cra-universal init

#This will copy ./templates/server into the current directory (it should be run on CRA client root)

```
##### 修改代码
```jsx
// before
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// after
//ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
##### 开发 && ssr 启动
```cmd
# Start CRA client
npm start

## Start CRA server, then open http://localhost:3001 in your browser
npx cra-universal start
```


#### dist
```cmd
# Change directory to your project root first, and run:
npx cra-universal build

# This command will build both client and server and put them into `./dist`
# Run locally:
# $ cd dist && npm i
# $ cd dist && yarn
# $ npm run serve
# $ yarn serve
```
##### 路由安装
```cmd
1、安装包
yarn add @types/react-router-dom;
yarn add react-router-dom@^5.3.0
react-router 分native 和 web 端
直接使用 web端
```
