# Personal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a cold-tech single-page personal homepage for Wang Baozhong, with professional self-introduction as the primary purpose and subtle football motion as a secondary memory point.

**Architecture:** Use a static frontend with one HTML file, one CSS file, and one JavaScript file. Content lives in semantic HTML, styling and responsive behavior live in CSS, and JavaScript only handles navigation state, copy actions, and small football trajectory interactions.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub Pages-compatible static files.

---

## File Structure

- Create: `index.html`
  - Owns semantic page content and section structure.
  - Contains all profile, skill, project, timeline, and contact content.
- Create: `styles.css`
  - Owns design tokens, layout, responsive rules, reduced-motion behavior, and visual effects.
  - Includes the cold-tech visual system, pitch-line background, cards, radar panel, timeline, and contact section.
- Create: `script.js`
  - Owns scroll navigation highlighting, smooth section navigation, football trajectory animation, and clipboard copy behavior.
- Modify: `README.md`
  - Documents what the project is, how to preview it locally, and where the design spec/plan live.
- Keep: `docs/superpowers/specs/2026-05-26-personal-homepage-design.md`
  - Source design spec. Do not edit unless the design changes.

## Task 1: Add Static Page Skeleton

**Files:**
- Create: `index.html`
- Modify: `README.md`

- [ ] **Step 1: Create the semantic HTML skeleton**

Create `index.html` with this full content:

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="王保忠的个人主页：测绘工程硕士，聚焦 C++ 高性能系统、GNSS/INS 组合导航与地理智能。"
    />
    <title>王保忠 | C++ 高性能系统 / 组合导航 / GIS + AI</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <a class="skip-link" href="#main">跳到主要内容</a>

    <header class="site-header" aria-label="主导航">
      <a class="brand" href="#hero" aria-label="回到首页">WBZ</a>
      <nav class="nav-links" aria-label="页面区块">
        <a href="#capabilities">能力</a>
        <a href="#projects">项目</a>
        <a href="#timeline">经历</a>
        <a href="#contact">联系</a>
      </nav>
    </header>

    <main id="main">
      <section class="hero section" id="hero" aria-labelledby="hero-title">
        <div class="pitch-grid" aria-hidden="true">
          <span class="pitch-line center-circle"></span>
          <span class="pitch-line penalty-left"></span>
          <span class="pitch-line penalty-right"></span>
          <span class="trajectory-line"></span>
          <button class="football-trigger" type="button" aria-label="触发足球轨迹动画"></button>
        </div>

        <div class="hero-content">
          <p class="eyebrow">SURVEYING ENGINEERING / SYSTEMS / NAVIGATION</p>
          <h1 id="hero-title">王保忠</h1>
          <p class="hero-kicker">C++ High-Performance Systems / GNSS Integrated Navigation / GIS + AI</p>
          <p class="hero-summary">测绘工程硕士，聚焦高性能服务端、组合导航与地理智能。</p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">查看项目</a>
            <a class="button secondary" href="#contact">联系我</a>
          </div>
        </div>

        <aside class="hero-panel" aria-label="个人定位摘要">
          <p class="panel-label">CURRENT STATUS</p>
          <dl>
            <div>
              <dt>学校</dt>
              <dd>中国石油大学（华东）</dd>
            </div>
            <div>
              <dt>方向</dt>
              <dd>C++ 高性能系统 / 组合导航</dd>
            </div>
            <div>
              <dt>联合培养</dt>
              <dd>电波传播研究所 / 中电 22 所</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section class="section capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <div class="section-heading">
          <p class="eyebrow">CAPABILITY RADAR</p>
          <h2 id="capabilities-title">能力雷达</h2>
          <p>用系统、网络、性能、导航和 AI/GIS 五条主线概括技术能力。</p>
        </div>

        <div class="capability-layout">
          <div class="radar-panel" aria-label="能力雷达视觉面板">
            <div class="radar-core">WBZ</div>
            <span style="--i: 0">系统</span>
            <span style="--i: 1">网络</span>
            <span style="--i: 2">性能</span>
            <span style="--i: 3">导航</span>
            <span style="--i: 4">AI/GIS</span>
            <span style="--i: 5">工具</span>
          </div>

          <div class="skill-groups">
            <article>
              <h3>系统能力</h3>
              <p>C++17、STL、Linux、多线程、线程同步</p>
            </article>
            <article>
              <h3>网络能力</h3>
              <p>TCP/IP、Socket、Reactor、epoll</p>
            </article>
            <article>
              <h3>性能能力</h3>
              <p>内存池、线程池、高并发架构</p>
            </article>
            <article>
              <h3>导航能力</h3>
              <p>GNSS/INS、因子图、卡尔曼滤波</p>
            </article>
            <article>
              <h3>AI/GIS 能力</h3>
              <p>BERT、LERT、BiLSTM、CRF、GIS、地理实体识别</p>
            </article>
            <article>
              <h3>工具能力</h3>
              <p>MATLAB、Python 深度学习环境</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section projects" id="projects" aria-labelledby="projects-title">
        <div class="section-heading">
          <p class="eyebrow">CORE PROJECTS</p>
          <h2 id="projects-title">核心项目</h2>
          <p>围绕高性能系统、组合导航算法和地理智能模型展示技术深度。</p>
        </div>

        <div class="project-grid">
          <article class="project-card" tabindex="0">
            <p class="project-index">PROJECT 01</p>
            <h3>高性能企业级 KV 存储引擎</h3>
            <p class="project-stack">C++17 / Reactor / epoll / RESP / Memory Pool / AOF + RDB / eBPF / RDMA</p>
            <ul>
              <li>底层网络支持 epoll、io_uring 与 NtyCo 协程切换。</li>
              <li>自主实现红黑树、哈希表和数组等核心数据结构。</li>
              <li>设计基于 Chunk 的定长内存池，降低高频增删下的碎片影响。</li>
              <li>结合 RDB 全量快照与 AOF 增量日志设计崩溃恢复流程。</li>
            </ul>
          </article>

          <article class="project-card" tabindex="0">
            <p class="project-index">PROJECT 02</p>
            <h3>基于改进哈里斯鹰优化算法的自适应无迹卡尔曼滤波</h3>
            <p class="project-stack">GNSS/INS / MHHO / UKF / Monte Carlo / PSINS</p>
            <ul>
              <li>面向复杂环境下 GNSS/INS 松组合导航误差累积问题。</li>
              <li>提出并实现基于 MHHO 的自适应 UKF 算法。</li>
              <li>完成高斯混合噪声与重尾脉冲噪声仿真实验。</li>
              <li>通过 50 次蒙特卡洛实验与 PSINS 车辆实测数据验证鲁棒性。</li>
            </ul>
          </article>

          <article class="project-card" tabindex="0">
            <p class="project-index">PROJECT 03</p>
            <h3>中文细粒度地理命名实体识别模型研究</h3>
            <p class="project-stack">BERT / LERT / BiLSTM / CRF / Scrapy / jieba / BIOE + BEMS</p>
            <ul>
              <li>爬取 290 万条微博数据，并围绕交通事故文本进行筛选清洗。</li>
              <li>人工标注 4000 条 TrafficNER 样本。</li>
              <li>实现词汇边界、字形信息和相对位置编码等表示增强模块。</li>
              <li>论文状态谨慎表述为 SCI 在投。</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section timeline" id="timeline" aria-labelledby="timeline-title">
        <div class="section-heading">
          <p class="eyebrow">TIMELINE</p>
          <h2 id="timeline-title">经历时间线</h2>
          <p>以坐标节点方式串联教育、实习、科研联合培养与学生工作。</p>
        </div>

        <ol class="timeline-list">
          <li>
            <time datetime="2020-09">2020.09-2024.06</time>
            <div>
              <p class="tag">教育</p>
              <h3>中国石油大学（华东）</h3>
              <p>地理信息科学学士，排名前 30%。</p>
            </div>
          </li>
          <li>
            <time datetime="2024-07">2024.07-2024.09</time>
            <div>
              <p class="tag">实习</p>
              <h3>北京远望景盛科技发展有限公司</h3>
              <p>软件开发实习生，参与信号处理与反演算法集成开发。</p>
            </div>
          </li>
          <li>
            <time datetime="2024-09">2024.09-2027.06</time>
            <div>
              <p class="tag">教育</p>
              <h3>中国石油大学（华东）</h3>
              <p>测绘工程硕士，排名前 20%。</p>
            </div>
          </li>
          <li>
            <time datetime="2025-09">2025.09-2027.01</time>
            <div>
              <p class="tag">科研</p>
              <h3>电波传播研究所 / 中电 22 所</h3>
              <p>组合导航算法工程师 / 联合培养，研究 GNSS/INS/相机多源融合导航定位系统。</p>
            </div>
          </li>
          <li>
            <time>校园经历</time>
            <div>
              <p class="tag">学生工作</p>
              <h3>文体活动与党支部工作</h3>
              <p>曾任学生会文体部部长、学院党支部书记，组织多项院级活动与党建品牌项目。</p>
            </div>
          </li>
        </ol>
      </section>

      <section class="section contact" id="contact" aria-labelledby="contact-title">
        <div class="contact-panel">
          <p class="eyebrow">CONTACT</p>
          <h2 id="contact-title">面向复杂系统，追求稳定、精确与高性能。</h2>
          <div class="contact-actions">
            <button class="copy-button" type="button" data-copy="turrybaozhongw@163.com">复制邮箱</button>
            <button class="copy-button" type="button" data-copy="18553498689">复制电话</button>
          </div>
          <p class="copy-status" role="status" aria-live="polite"></p>
        </div>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Update README**

Replace `README.md` with:

```markdown
# Turry-Web

王保忠的个人主页项目。首版是一个 GitHub Pages 友好的静态单页网站，用于展示个人背景、技术能力、项目经历、实践经历和联系方式。

## 本地预览

直接在浏览器打开 `index.html` 即可预览。

## 项目文件

- `index.html`：页面内容与结构
- `styles.css`：视觉系统、布局与动画
- `script.js`：导航、足球轨迹与复制交互
- `docs/superpowers/specs/2026-05-26-personal-homepage-design.md`：设计规格
- `docs/superpowers/plans/2026-05-26-personal-homepage.md`：开发计划
```

- [ ] **Step 3: Verify skeleton opens**

Run:

```powershell
Get-ChildItem -Name
```

Expected output includes:

```text
README.md
docs
index.html
```

- [ ] **Step 4: Commit**

Run:

```powershell
git add index.html README.md
git commit -m "feat: add personal homepage content skeleton"
```

Expected: commit succeeds.

## Task 2: Add Cold-Tech Visual System

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Create the stylesheet**

Create `styles.css` with this full content:

```css
:root {
  color-scheme: dark;
  --bg: #03070d;
  --panel: rgba(8, 18, 31, 0.78);
  --panel-strong: rgba(10, 25, 43, 0.94);
  --line: rgba(118, 218, 255, 0.25);
  --line-strong: rgba(118, 218, 255, 0.58);
  --text: #eef8ff;
  --muted: #9db6c8;
  --cyan: #56d7ff;
  --steel: #5b7fa4;
  --green: #2be0a2;
  --danger: #ff4f7b;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
  --max: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 20% 0%, rgba(43, 224, 162, 0.12), transparent 30%),
    radial-gradient(circle at 80% 10%, rgba(86, 215, 255, 0.14), transparent 30%),
    linear-gradient(180deg, #03070d 0%, #06111d 48%, #03070d 100%);
  color: var(--text);
  font-family: Inter, "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
  letter-spacing: 0;
}

body::before {
  position: fixed;
  inset: 0;
  z-index: -2;
  content: "";
  background-image:
    linear-gradient(rgba(118, 218, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(118, 218, 255, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, black, transparent 82%);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.skip-link {
  position: fixed;
  left: 16px;
  top: 12px;
  z-index: 20;
  transform: translateY(-140%);
  background: var(--cyan);
  color: #02101a;
  padding: 10px 14px;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px clamp(18px, 4vw, 54px);
  border-bottom: 1px solid rgba(118, 218, 255, 0.16);
  background: rgba(3, 7, 13, 0.72);
  backdrop-filter: blur(18px);
}

.brand {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--line-strong);
  color: var(--cyan);
  font-weight: 800;
}

.nav-links {
  display: flex;
  gap: clamp(12px, 2vw, 28px);
  color: var(--muted);
  font-size: 14px;
}

.nav-links a {
  padding: 8px 0;
  border-bottom: 1px solid transparent;
}

.nav-links a.is-active,
.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--text);
  border-color: var(--cyan);
}

.section {
  position: relative;
  max-width: var(--max);
  margin: 0 auto;
  padding: 110px clamp(18px, 4vw, 54px);
}

.hero {
  min-height: 100vh;
  max-width: none;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
  align-items: center;
  gap: clamp(28px, 5vw, 70px);
  overflow: hidden;
}

.hero-content,
.hero-panel,
.section-heading,
.project-card,
.skill-groups article,
.contact-panel {
  position: relative;
  z-index: 1;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--cyan);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 18px;
  font-size: clamp(54px, 9vw, 132px);
  line-height: 0.95;
}

h2 {
  margin-bottom: 14px;
  font-size: clamp(30px, 5vw, 58px);
  line-height: 1.04;
}

h3 {
  font-size: 20px;
}

.hero-kicker {
  max-width: 800px;
  color: var(--text);
  font-size: clamp(18px, 2.4vw, 30px);
  line-height: 1.35;
}

.hero-summary,
.section-heading p,
.project-card li,
.timeline-list p,
.skill-groups p {
  color: var(--muted);
  line-height: 1.75;
}

.hero-actions,
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.button,
.copy-button {
  min-height: 44px;
  border: 1px solid var(--line-strong);
  background: rgba(86, 215, 255, 0.08);
  color: var(--text);
  padding: 12px 18px;
  cursor: pointer;
}

.button.primary,
.copy-button:hover,
.copy-button:focus-visible {
  background: var(--cyan);
  color: #02101a;
}

.button.secondary {
  background: transparent;
}

.hero-panel,
.project-card,
.skill-groups article,
.contact-panel {
  border: 1px solid rgba(118, 218, 255, 0.22);
  background: linear-gradient(180deg, var(--panel), rgba(5, 13, 23, 0.72));
  box-shadow: var(--shadow);
}

.hero-panel {
  padding: 26px;
}

.hero-panel dl,
.hero-panel dd {
  margin: 0;
}

.hero-panel div {
  padding: 18px 0;
  border-top: 1px solid rgba(118, 218, 255, 0.14);
}

.hero-panel dt {
  color: var(--muted);
  font-size: 13px;
}

.hero-panel dd {
  margin-top: 6px;
}

.pitch-grid {
  position: absolute;
  inset: 76px 0 0;
  pointer-events: none;
  opacity: 0.72;
}

.pitch-grid::before,
.pitch-grid::after {
  position: absolute;
  content: "";
  border: 1px solid rgba(43, 224, 162, 0.18);
}

.pitch-grid::before {
  inset: 12% 7% 11%;
}

.pitch-grid::after {
  left: 50%;
  top: 12%;
  bottom: 11%;
  width: 1px;
  background: rgba(43, 224, 162, 0.14);
}

.pitch-line {
  position: absolute;
  border: 1px solid rgba(43, 224, 162, 0.2);
}

.center-circle {
  left: 50%;
  top: 50%;
  width: 210px;
  height: 210px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.penalty-left,
.penalty-right {
  top: 34%;
  width: 150px;
  height: 32%;
}

.penalty-left {
  left: 7%;
}

.penalty-right {
  right: 7%;
}

.trajectory-line {
  position: absolute;
  left: 18%;
  bottom: 24%;
  width: 44%;
  height: 2px;
  transform: rotate(-18deg);
  transform-origin: left center;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  box-shadow: 0 0 22px rgba(86, 215, 255, 0.8);
}

.football-trigger {
  position: absolute;
  left: 17%;
  bottom: 22%;
  width: 28px;
  height: 28px;
  border: 1px solid var(--cyan);
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ffffff, #7edcff 42%, #092133 70%);
  pointer-events: auto;
  cursor: pointer;
}

.football-trigger.is-shooting {
  animation: shoot 850ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.section-heading {
  max-width: 760px;
  margin-bottom: 34px;
}

.capability-layout {
  display: grid;
  grid-template-columns: minmax(260px, 360px) 1fr;
  gap: 28px;
}

.radar-panel {
  position: relative;
  min-height: 360px;
  border: 1px solid var(--line);
  background:
    linear-gradient(30deg, transparent 49%, rgba(118, 218, 255, 0.18) 50%, transparent 51%),
    linear-gradient(90deg, transparent 49%, rgba(118, 218, 255, 0.18) 50%, transparent 51%),
    radial-gradient(circle, rgba(86, 215, 255, 0.12), transparent 62%);
}

.radar-core {
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  display: grid;
  width: 86px;
  height: 86px;
  place-items: center;
  border: 1px solid var(--cyan);
  color: var(--cyan);
  font-weight: 800;
}

.radar-panel span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: rotate(calc(var(--i) * 60deg)) translate(135px) rotate(calc(var(--i) * -60deg));
  color: var(--text);
  font-size: 14px;
}

.skill-groups,
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.skill-groups article,
.project-card {
  padding: 22px;
}

.project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-card {
  min-height: 420px;
  transition: transform 180ms ease, border-color 180ms ease;
}

.project-card:hover,
.project-card:focus-visible {
  transform: translateY(-6px);
  border-color: var(--cyan);
  outline: none;
}

.project-index,
.tag,
.panel-label {
  color: var(--green);
  font-size: 12px;
  font-weight: 800;
}

.project-stack {
  color: var(--cyan);
  font-size: 13px;
  line-height: 1.6;
}

.project-card ul {
  padding-left: 18px;
}

.timeline-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid var(--line);
}

.timeline-list li {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 28px;
  padding: 0 0 34px 28px;
}

.timeline-list li::before {
  position: absolute;
  content: "";
}

.timeline-list time {
  color: var(--cyan);
  font-size: 14px;
}

.contact {
  padding-bottom: 140px;
}

.contact-panel {
  padding: clamp(26px, 5vw, 58px);
}

.copy-status {
  min-height: 24px;
  margin-top: 18px;
  color: var(--green);
}

@keyframes shoot {
  0% {
    transform: translate(0, 0) scale(1);
  }
  70% {
    transform: translate(48vw, -28vh) scale(0.7);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}

@media (max-width: 900px) {
  .hero,
  .capability-layout,
  .timeline-list li {
    grid-template-columns: 1fr;
  }

  .project-grid,
  .skill-groups {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 130px;
  }

  .hero-panel {
    align-self: start;
  }
}

@media (max-width: 640px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
    padding: 14px 18px;
  }

  .nav-links {
    width: 100%;
    justify-content: space-between;
  }

  .section {
    padding: 92px 18px;
  }

  .hero-actions,
  .contact-actions {
    flex-direction: column;
  }

  .button,
  .copy-button {
    width: 100%;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
}
```

- [ ] **Step 2: Verify CSS file exists**

Run:

```powershell
Get-Item styles.css | Select-Object Name,Length
```

Expected: `styles.css` exists and has non-zero length.

- [ ] **Step 3: Commit**

Run:

```powershell
git add styles.css
git commit -m "feat: add cold tech visual system"
```

Expected: commit succeeds.

## Task 3: Add Navigation, Football, And Copy Interactions

**Files:**
- Create: `script.js`

- [ ] **Step 1: Create interaction script**

Create `script.js` with this full content:

```javascript
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveNav = () => {
  const current = sections.reduce((active, section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 140 ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", isActive);
  });
};

window.addEventListener("scroll", setActiveNav, { passive: true });
window.addEventListener("load", setActiveNav);

const football = document.querySelector(".football-trigger");

if (football) {
  football.addEventListener("click", () => {
    football.classList.remove("is-shooting");
    window.requestAnimationFrame(() => {
      football.classList.add("is-shooting");
    });
  });

  football.addEventListener("animationend", () => {
    football.classList.remove("is-shooting");
  });
}

const status = document.querySelector(".copy-status");
const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      status.textContent = `已复制：${value}`;
    } catch {
      status.textContent = `复制失败，请手动复制：${value}`;
    }
  });
});
```

- [ ] **Step 2: Verify script syntax with Node**

Run:

```powershell
node --check script.js
```

Expected:

```text
```

The command exits with code 0 and no syntax errors.

- [ ] **Step 3: Commit**

Run:

```powershell
git add script.js
git commit -m "feat: add homepage interactions"
```

Expected: commit succeeds.

## Task 4: Browser Verification And Polish Pass

**Files:**
- Modify: `index.html` if visual review reveals wording or structure issues.
- Modify: `styles.css` if visual review reveals overlap, spacing, contrast, or responsive issues.
- Modify: `script.js` if interaction review reveals broken behavior.

- [ ] **Step 1: Open the page locally**

Open `index.html` in the browser. If using the in-app browser plugin, open the absolute file path:

```text
C:\Users\Administrator\Documents\个人网页\index.html
```

Expected: the page renders as a dark single-page personal homepage with hero, capability radar, projects, timeline, and contact sections.

- [ ] **Step 2: Desktop visual checklist**

At a desktop viewport around 1440 x 900, verify:

```text
首屏显示姓名“王保忠”
英文技术定位不溢出
导航固定在顶部
足球场线条低调可见
核心项目三列展示
项目卡片悬停有轻微抬升
联系方式区可见
页面不是纯足球游戏界面
```

- [ ] **Step 3: Mobile visual checklist**

At a mobile viewport around 390 x 844, verify:

```text
导航文字不重叠
首屏文字不被顶部导航遮挡
项目卡片单列展示
能力区单列展示
时间线内容不挤压
按钮宽度适合触控
足球动画不遮挡正文
```

- [ ] **Step 4: Interaction checklist**

In the browser, verify:

```text
点击导航“能力”滚动到能力区
点击导航“项目”滚动到项目区
点击足球触发一次短轨迹动画
点击“复制邮箱”后状态文本显示邮箱
点击“复制电话”后状态文本显示电话
键盘 Tab 可以聚焦导航、按钮和项目卡片
```

- [ ] **Step 5: Apply concrete fixes if checklist fails**

If desktop project cards are too tall or crowded, modify `styles.css`:

```css
.project-card {
  min-height: auto;
}
```

If mobile hero is hidden behind the header, modify `styles.css`:

```css
@media (max-width: 640px) {
  .hero {
    padding-top: 160px;
  }
}
```

If copy status has poor contrast, modify `styles.css`:

```css
.copy-status {
  color: #7fffd0;
}
```

- [ ] **Step 6: Commit verification polish**

Only if files changed, run:

```powershell
git add index.html styles.css script.js
git commit -m "fix: polish homepage responsive behavior"
```

Expected: commit succeeds if there were changes. If there were no changes, skip this commit.

## Task 5: Final Repository Verification And Push

**Files:**
- No expected file changes.

- [ ] **Step 1: Check repository status**

Run:

```powershell
git status --short --branch
```

Expected:

```text
## main...origin/main [ahead N]
```

or:

```text
## main...origin/main
```

If files are modified, inspect them before continuing.

- [ ] **Step 2: Inspect recent commits**

Run:

```powershell
git log --oneline --decorate -5
```

Expected: recent commits include the skeleton, visual system, interaction script, and any polish commit.

- [ ] **Step 3: Push to GitHub**

Run:

```powershell
git push
```

Expected: GitHub repository `https://github.com/Turry-uping/Turry-Web.git` receives the new commits on `main`.

- [ ] **Step 4: Verify GitHub Pages readiness**

Confirm these files exist at the repository root:

```text
index.html
styles.css
script.js
README.md
```

Expected: GitHub Pages can serve the project from the repository root if Pages is enabled.

## Self-Review

- Spec coverage: The plan covers the single-page structure, hero, capability radar, core projects, timeline, contact section, static architecture, responsiveness, accessibility, reduced motion, copy failure fallback, visual checks, and GitHub push.
- Placeholder scan: No unfinished markers or vague future implementation steps remain.
- Type consistency: CSS class names referenced by `index.html`, `styles.css`, and `script.js` match: `.nav-links`, `.football-trigger`, `.is-shooting`, `.copy-button`, and `.copy-status`.
- Scope check: The plan stays within the first static version and excludes backend, blog, CMS, accounts, analytics, and a full football game.
