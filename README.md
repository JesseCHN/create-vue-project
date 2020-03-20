# create-vue-project
create common vue project with normalized tools

## use tools
### npm
### eslint
### airbnb js style
### webpack
```
开发环境(development)和生产环境(production)的构建目标差异很大。
在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。
而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。
```
```
在声明 import 时，使用下面这些内置指令，可以让 webpack 输出 "resource hint(资源提示)"，来告知浏览器：

prefetch(预取)：将来某些导航下可能需要的资源
preload(预加载)：当前导航下可能需要资源
import(/* webpackPrefetch: true */ 'LoginModal');
```
### husky
### karma
#### PhantomJS jasmine karma-coverage Backstop.js
#### e2e selenium-webdriver
