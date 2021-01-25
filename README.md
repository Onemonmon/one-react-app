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

---------------------------------------------至此简易的 react 脚手架已搭建完成---------------------------------------------

**如何优化打包性能？**

主要从 3 个方面入手：速度、体积、按需

### 速度

1. 优化 Loader 的文件搜索范围，如指定 babel-loader 的查找路径 include 和不查找路径 exclude，将编译后的文件缓存 cacheDirectory: true

2. HappyPack 多线程打包，性能依据电脑内核而定

3. DllPlugin 提前打包指定类库，当类库版本更新时才需要重新打包

4. UglifyJS 代码并行压缩：webpack4 中 mode=production 时默认开启

5. resolve.extensions resolve.alias module.noParse

### 体积

1. 开启 scope hosting，它会分析模块间的依赖关系，尽可能合并打包后的模块，optimization: { concatenateModules: true }

2. tree shaking （webpack4 默认开启），去除文件未使用的代码（dead-code）
