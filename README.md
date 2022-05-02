# edu-boss

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


### 问题
#### 1.vue.config.js配置css。loaderOptions报错@forward rules must be written before any other rules.或者@use rules must be written before any other rules.
- 原因：因为在main.ts中已经全局引入的css中 含有@use @forward等css注解。
- 解决办法：main.js全局引入同样改成配置
```js
// vue.config.js
css: {
    loaderOptions: {
        scss: {
        additionalData: '@import "~@/styles/element/index.scss";@import "~@/styles/variables.scss";'
        }
    }
}
```
