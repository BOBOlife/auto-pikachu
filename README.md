## 部署方式

每次提交代码的时候，需要运行下面这一行，才能正确请求到 JS 和 CSS

```
npx parcel build src/test.html --public-src .
```
bug 修复:

parcel 打包会将html文件里的style标签删掉，需要将这些style样式放在css文件中引入，便无恙。 