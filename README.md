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
