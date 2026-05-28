export const getActiveSectionId = (sections, offset = 140) => {
  if (!sections.length) {
    return "";
  }

  return sections.reduce((active, section) => {
    return section.top <= offset ? section : active;
  }, sections[0]).id;
};

export const getNextScanIndex = (currentIndex, total) => {
  if (total <= 0) {
    return 0;
  }

  return (currentIndex + 1) % total;
};

export const getProjectMatches = (projects, filter) => {
  if (filter === "all") {
    return projects;
  }

  return projects.filter((project) => project.tech.includes(filter));
};

export const getShotLevel = (combo) => {
  if (combo >= 5) {
    return "SYSTEM OVERDRIVE";
  }

  if (combo >= 3) {
    return "POWER SHOT";
  }

  return "GOOD TOUCH";
};
