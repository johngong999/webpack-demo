# webpack-demo
## single—-entry
webpack单入口打包初体验。看文档说，treeShaking好像需要搭配代码压缩插件才能生效。

## babel
在webpack打包基础上加入babel。

babel 7采用@babel/preset-env的preset，可以根据targets中设定的浏览器，自动的依据浏览器的支持情况，按需引入需要的包来对e6以前的代码进行转换。此举可以减少引入不必要的polyfill

当 useBuiltIns 设置为 usage 时，Babel 会在你使用到 ES2015+ 新特性时，自动添加 babel-polyfill 的引用，并且是 partial 级别的引用。
当 useBuiltIns 设置为 entry 时,根据配置的浏览器兼容，引入浏览器不兼容的 polyfill。需要在入口文件手动添加 import '@babel/polyfill'，会自动根据 browserslist 替换成浏览器不兼容的所有 polyfill。

总结一下就是：targets来限定需要兼容的浏览器版本，以此来确定哪些polyfill是当前浏览器需要的。在通过useBuiltIns来决定polyfill的引入方式。usage是用了啥不兼容的语法引入啥，entry是根据浏览器配置，引入所有所有当前浏览器不兼容的polyfill；