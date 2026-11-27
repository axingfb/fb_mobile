# FB_Mobile

沿用 Filbet 移动端信息架构、以 BC.GAME 手机版浅色视觉为默认风格的独立前端原型，包含 Home、Game、Promos、Filcoin、My 和 My → Responsible Gaming。

## 本地预览

在仓库根目录运行：

```sh
python3 -m http.server 8788 --bind 127.0.0.1
```

- [首页](http://127.0.0.1:8788/)
- [Responsible Gaming](http://127.0.0.1:8788/#/my/responsible-gaming)
- [项目设计规范](./DESIGN.md)
- [界面样式和设计变量](./styles.css)

静态 HTML、CSS 和 JavaScript，无需安装依赖。Hash 路由支持直接访问、浏览器返回与静态托管子路径。所有账户、积分、活动和游戏内容均为示例。Responsible Gaming 使用浏览器本地存储。当前实现的时段、金额和时长校验用于原型演示，线上规则需要另行确认。
