## 项目背景
- 近期学习了react，自己生活中，见到一些喜欢的网站，存着存着就丢了，想开发一个鱼皮大佬类似的网站，一是为练手，二是方便自己

## 技术栈
- React 全家桶 React + react-router-dom V6 + antd + react-redux + styled-components

## 技术说明
### 包管理使用yarn，并行下载，Facebook开发，react也是Facebook开发。
### 配置scss
```js
// react框架默认认识 scss，配置 scss就可以
yarn add styled-components --save
```
### 解决css样式冲突问题，使用styled-components
```js
yarn add styled-components -S
```
### antd 配置按需引入
```js
// 安装 @craco/craco
yarn add @craco/craco
yarn add babel-plugin-import
// 建立根目录文件 craco.config.js
module.exports = {
  babel: {//支持装饰器
      plugins: [
          [
              "import",
              {
                  "libraryName": "antd",
                  "libraryDirectory": "es",
                  "style": 'css' //设置为true即是less 这里用的是css
              }
          ]
      ]
  },
};
```