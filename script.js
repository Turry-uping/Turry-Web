import {
  getActiveSectionId,
  getNextScanIndex,
  getProjectMatches,
  getShotLevel,
} from "./site-core.mjs";

const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sectionElements = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const hudSection = document.querySelector("[data-hud-section]");
const hudEnergy = document.querySelector("[data-hud-energy]");
const hudLog = document.querySelector("[data-hud-log]");
const energyBar = document.querySelector("[data-energy-bar]");
const scrollMeter = document.querySelector(".scroll-meter span");
const skillCards = Array.from(document.querySelectorAll(".skill-card"));
const filterChips = Array.from(document.querySelectorAll(".filter-chip"));
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const projectDetail = document.querySelector("[data-project-detail]");
const football = document.querySelector(".football-trigger");
const shotCombo = document.querySelector("[data-shot-combo]");
const status = document.querySelector(".copy-status");

let energy = 0;
let scanIndex = -1;
let scanTimer = 0;
let combo = 0;

const projectData = {
  kv: {
    title: "高性能企业级 KV 存储引擎",
    summary:
      "这是最能体现工程底层能力的项目：网络模型、数据结构、内存池、持久化和分布式同步都在同一个系统里协同。",
    points: ["Reactor / epoll 高并发网络层", "Chunk 定长内存池", "RDB + AOF 崩溃恢复", "RESP 协议兼容"],
  },
  nav: {
    title: "自适应无迹卡尔曼滤波",
    summary:
      "这是导航算法方向的核心项目，重点解决复杂环境下 GNSS/INS 松组合导航误差累积与鲁棒性问题。",
    points: ["MHHO 自适应 UKF", "高斯混合与重尾脉冲噪声仿真", "50 次蒙特卡洛实验", "PSINS 实测数据验证"],
  },
  ner: {
    title: "中文细粒度地理命名实体识别",
    summary:
      "这是 GIS 与深度学习交叉项目，围绕社交媒体与新闻文本中的细粒度地理实体识别展开。",
    points: ["290 万条微博数据爬取", "4000 条 TrafficNER 人工标注", "词汇/字形/位置表示增强", "SCI 在投"],
  },
};

const addEnergy = (amount, message) => {
  energy = Math.min(100, energy + amount);
  if (hudEnergy) {
    hudEnergy.textContent = `${String(energy).padStart(2, "0")}%`;
  }
  if (energyBar) {
    energyBar.style.width = `${energy}%`;
  }
  if (hudLog && message) {
    hudLog.textContent = message;
  }
};

const setActiveNav = () => {
  const sections = sectionElements.map((section) => ({
    id: section.id,
    top: section.getBoundingClientRect().top,
  }));
  const activeId = getActiveSectionId(sections, 360);
  const activeSection = document.getElementById(activeId);

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });

  if (hudSection && activeSection?.dataset.sectionName) {
    hudSection.textContent = activeSection.dataset.sectionName;
  }
};

const updateScrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll <= 0 ? 0 : Math.round((window.scrollY / maxScroll) * 100);
  document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
  if (scrollMeter) {
    scrollMeter.style.width = `${progress}%`;
  }
};

const handleMouseMove = (event) => {
  const x = Math.round((event.clientX / window.innerWidth) * 100);
  const y = Math.round((event.clientY / window.innerHeight) * 100);
  document.documentElement.style.setProperty("--mx", `${x}%`);
  document.documentElement.style.setProperty("--my", `${y}%`);
  document.documentElement.style.setProperty("--tilt-x", `${(x - 50) / 12}`);
  document.documentElement.style.setProperty("--tilt-y", `${(y - 50) / 12}`);
};

const startSkillScan = (preferredSkill) => {
  window.clearInterval(scanTimer);
  skillCards.forEach((card) => card.classList.remove("is-scanning"));

  if (preferredSkill) {
    const target = skillCards.find((card) => card.dataset.skill === preferredSkill);
    if (target) {
      target.classList.add("is-scanning");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      addEnergy(10, `已定位能力模块：${target.querySelector("h3").textContent}`);
    }
    return;
  }

  scanTimer = window.setInterval(() => {
    skillCards.forEach((card) => card.classList.remove("is-scanning"));
    scanIndex = getNextScanIndex(scanIndex, skillCards.length);
    const active = skillCards[scanIndex];
    active.classList.add("is-scanning");
    addEnergy(4, `扫描中：${active.querySelector("h3").textContent}`);
  }, 650);

  window.setTimeout(() => {
    window.clearInterval(scanTimer);
    addEnergy(12, "能力扫描完成，建议继续查看项目战术板。");
  }, 4600);
};

const applyProjectFilter = (filter) => {
  const projects = projectCards.map((card) => ({
    element: card,
    title: card.querySelector("h3").textContent,
    tech: card.dataset.tech.split(" "),
  }));
  const matches = new Set(getProjectMatches(projects, filter).map((project) => project.element));

  projectCards.forEach((card) => {
    card.classList.toggle("is-muted", !matches.has(card));
  });

  filterChips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === filter);
  });

  addEnergy(8, filter === "all" ? "已显示全部项目模块。" : `已筛选技术标签：${filter}`);
};

const selectProject = (card) => {
  const data = projectData[card.dataset.project];
  if (!data || !projectDetail) {
    return;
  }

  projectCards.forEach((item) => item.classList.remove("is-selected"));
  card.classList.add("is-selected");
  projectDetail.innerHTML = `
    <p class="panel-label">SELECTED MODULE</p>
    <h3>${data.title}</h3>
    <p>${data.summary}</p>
    <ul>${data.points.map((point) => `<li>${point}</li>`).join("")}</ul>
  `;
  addEnergy(12, `已展开项目：${data.title}`);
};

const triggerShot = () => {
  if (!football) {
    return;
  }

  combo += 1;
  const level = getShotLevel(combo);
  if (shotCombo) {
    shotCombo.textContent = combo;
  }

  football.classList.remove("is-shooting", "is-overdrive");
  window.requestAnimationFrame(() => {
    football.classList.add(combo >= 5 ? "is-overdrive" : "is-shooting");
  });
  addEnergy(combo >= 5 ? 18 : 9, `${level}：足球轨迹已触发，系统能量提升。`);
};

window.addEventListener("scroll", () => {
  setActiveNav();
  updateScrollProgress();
}, { passive: true });
window.addEventListener("load", () => {
  setActiveNav();
  updateScrollProgress();
});
window.addEventListener("mousemove", handleMouseMove, { passive: true });

document.querySelectorAll(".scan-launch").forEach((button) => {
  button.addEventListener("click", () => startSkillScan());
});

document.querySelectorAll("[data-filter-jump]").forEach((button) => {
  button.addEventListener("click", () => startSkillScan(button.dataset.filterJump));
});

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => applyProjectFilter(chip.dataset.filter));
});

projectCards.forEach((card) => {
  card.addEventListener("click", () => selectProject(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectProject(card);
    }
  });
});

if (football) {
  football.addEventListener("click", triggerShot);
  football.addEventListener("animationend", () => {
    football.classList.remove("is-shooting", "is-overdrive");
  });
}

document.querySelector(".system-toggle")?.addEventListener("click", (event) => {
  const pressed = event.currentTarget.getAttribute("aria-pressed") === "true";
  event.currentTarget.setAttribute("aria-pressed", String(!pressed));
  document.body.classList.toggle("immersive", !pressed);
  addEnergy(7, !pressed ? "沉浸模式已开启。" : "沉浸模式已关闭。");
});

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      if (status) {
        status.textContent = `已复制：${value}`;
      }
      addEnergy(6, "联系方式已复制。");
    } catch {
      if (status) {
        status.textContent = `复制失败，请手动复制：${value}`;
      }
      addEnergy(2, "浏览器拒绝剪贴板权限，已显示手动复制内容。");
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 },
);

document.querySelectorAll(".reveal-zone").forEach((section) => observer.observe(section));

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-lit");
        addEnergy(3, `经历节点点亮：${entry.target.querySelector("h3").textContent}`);
      }
    });
  },
  { threshold: 0.45 },
);

document.querySelectorAll(".timeline-node").forEach((node) => timelineObserver.observe(node));
