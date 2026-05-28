import assert from "node:assert/strict";
import {
  getActiveSectionId,
  getNextScanIndex,
  getProjectMatches,
  getShotLevel,
} from "../site-core.mjs";

const sections = [
  { id: "hero", top: -420 },
  { id: "capabilities", top: -40 },
  { id: "projects", top: 260 },
];

assert.equal(getActiveSectionId(sections, 140), "capabilities");
assert.equal(getActiveSectionId([{ id: "hero", top: 20 }], 140), "hero");
assert.equal(getNextScanIndex(0, 6), 1);
assert.equal(getNextScanIndex(5, 6), 0);

const projects = [
  { title: "KV 存储引擎", tech: ["cpp", "linux", "performance"] },
  { title: "组合导航滤波", tech: ["navigation", "matlab"] },
  { title: "地理命名实体识别", tech: ["ai", "gis", "python"] },
];

assert.deepEqual(
  getProjectMatches(projects, "cpp").map((project) => project.title),
  ["KV 存储引擎"],
);
assert.deepEqual(
  getProjectMatches(projects, "all").map((project) => project.title),
  ["KV 存储引擎", "组合导航滤波", "地理命名实体识别"],
);

assert.equal(getShotLevel(1), "GOOD TOUCH");
assert.equal(getShotLevel(3), "POWER SHOT");
assert.equal(getShotLevel(5), "SYSTEM OVERDRIVE");

console.log("site-core tests passed");
