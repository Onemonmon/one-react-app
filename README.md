# create-react-app

**从零开始搭建 react 项目**

1. yarn init -y

2. yarn add webpack webpack-cli -D

3. yarn add react react-dom -S

4. 新建目录结构
   -public
   -index.html
   -src
   -index.js

5. 新建 webpack.base.config.js webpack.dev.config.js webpack.prod.config.js

6. package.json 新增命令 dev: webpack --config webpack.dev.config.js

7. yarn add webpack-merge -D

8. yarn add html-webpack-plugin -D

9. yarn add webpack-dev-server -D

   修改 package.json 的启动命令为 webpack-dev-server --config webpack.dev.config.js

   异常：webpack-cli 4.0 无法使用 webpack-dev-server，改为 webpack serve --config webpack.dev.config.js

10. yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader -D

11. 新建 .babelrc 文件

12. yarn add corejs regenerator-runtime -D

    babel 7.4.0 起已废弃 babel/polyfill，用 corejs regenerator-runtime 代替

    question：为什么编译后的 bundle.js 里会出现箭头函数？

13. yarn add less less-loader css-loader style-loader -D

14. webpack.base.config.js 新增 resolve: {extensions: ["js", "jsx"], alias: { "@": "../src" }}

15. yarn add url-loader file-loader -D

16. yarn add typescript ts-loader @types/react @types/react-dom -D

    tsc --init

    tsconfig.json 中去掉注释 "jsx": "preserve", "allowSyntheticDefaultImports": true, moduleResolution": "node" ，修改 "module": "es6"

    新建 typings 文件夹，新增 images.d.ts, css.d.ts 文件，在 compilerOptions 下新增"include": ["./typing/xx.d.ts"]
