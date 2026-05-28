# Turry-Web

王保忠的个人主页项目。首版是一个 GitHub Pages 友好的静态单页网站，用于展示个人背景、技术能力、项目经历、实践经历和联系方式。

## 本地预览

直接在浏览器打开 `index.html` 即可预览。

也可以在 VSCode 中运行：

1. 打开项目文件夹 `C:\Users\Administrator\Documents\个人网页`
2. 按 `Ctrl+Shift+P`
3. 输入并选择 `Tasks: Run Task`
4. 选择 `启动个人网站本地预览`
5. 访问 `http://127.0.0.1:5500/index.html`

如果你安装了 VSCode 的 Live Server 扩展，也可以右键 `index.html`，选择 `Open with Live Server`。

## 项目文件

- `index.html`：页面内容与结构
- `styles.css`：视觉系统、布局与动画
- `script.js`：导航、足球轨迹、能力扫描、项目筛选与复制交互
- `site-core.mjs`：可测试的互动状态计算逻辑
- `tests/site-core.test.mjs`：互动逻辑测试
- `docs/superpowers/specs/2026-05-26-personal-homepage-design.md`：设计规格
- `docs/superpowers/plans/2026-05-26-personal-homepage.md`：开发计划

## 验证

运行互动逻辑测试：

```bash
node tests/site-core.test.mjs
```

如果系统里的 `node` 无法访问，可以使用 Codex 工作区自带 Node 运行同一个测试。
