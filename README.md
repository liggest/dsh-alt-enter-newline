# dsh-alt-enter-newline

[English](./README.en.md) | 简体中文

给 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（dsh）的网页输入框加上 **Alt+Enter 换行**。

dsh 默认的按键是：Enter 发送、Shift+Enter 换行、Ctrl+Enter 在对话进行中插话，Alt+Enter 没有绑定功能。装上这个插件后，Alt+Enter 也可以换行，和其它 AI 客户端的习惯一致。

实现上只是把 Alt+Enter 转成 Shift+Enter 交给输入框自己处理，不改动 dsh 本身，卸载后不留痕迹。

## 安装

在 dsh 网页端的插件市场或插件管理器里搜索安装，也可以用命令行（`web` 换成你的 profile 名，下同）：

```
dsh plugin --profile web add dsh-alt-enter-newline
```

或者直接让 dsh 里的 Agent 帮你装。装好后刷新页面即可生效；在快捷键参考（按 Ctrl+/，或设置里快捷键一栏的“查看”按钮）里能看到新增的“Alt+Enter 换行”一条。

## 兼容性

- 中文输入法选词时的 Enter、带 AltGr 的欧洲键盘布局不受影响；
- Ctrl+Alt+Enter（面板全屏）等其它快捷键不受影响；
- 已在 dsh 0.1.7-rc.2 上测试。插件用到 dsh 的一些内部实现，dsh 更新后如果失效，请到 [Issues](https://github.com/liggest/dsh-alt-enter-newline/issues) 反馈。

## 卸载

```
dsh plugin --profile web remove dsh-alt-enter-newline
```

也可以在插件管理器里卸载。

## 许可证

[MIT](./LICENSE)
