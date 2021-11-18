# react-cli
react-typescript-router-mobx-redux-hook
>嫌弃redux 繁琐
那为何不用mobx 呢，随意，但又不失规范



```html
main 分支为 路由版本
redux 分支为 redux 结构
mobx 分支为 mobx 结构代码
rematch 分支为reamatch 结构代码
整体在维护中
```
> 切换到分支 rematch 可以看到完整rematch 搭建的代码
react/react-cli/tpl/src/rd/r.md

##### 更新日志
 - 路由版本 为main分支
 - redux 版本 为 redux分支
 - mobx 版本 为redux分支
 - rematch 版本为 reumatch 分支
 - App.ts 与 Router.ts 互换，各分支都已改变
 - main 分支为基础分支 ，其他都分支均为main clone 出来的
 - 别名 各分支也均实现
 - tsx demo 在rematch 分支上
 - redux 分支目前内容更新为最多代码
 - 如果明确使用哪个状态可直接clone
    ```HTML
      git clone -b redux git@...     增加-b 后面是具体分支名，可直接clone 出具体分支
     ```
 - 路由首页出现城市动态 在rematch分支
 - tsx 函数组件


## step1
```cmd
把demo 文件改成自己需要的项目名，然后移动。后期会维护一步创建.
```
##### step1-1
```cmd
进入文件夹:
cd react-cli
```
##### step1-2
```cmd
改名
mv tpl candy-react
```
##### step1-3
```cmd
移动到上一级
mv tpl ../
```
##### step1-4
```cmd
退出当前文件夹
cd ..
rm -rf react-cli
```
## step2
```cmd
node -v
v14.15.3
yarn config get registry
yarn config set registry http://registry.npm.taobao.org/
```

## step3
```cmd
yarn
yarn start
```
