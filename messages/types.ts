export interface MessageStructure {
  navbar: {
    home: string;
    about: string;
    cv: string;
    skills: string;
    publications: string;
    books: string;
  };
  common: {
    viewCV: string;
    moreAboutMe: string;
  };
  home: {
    title: string;
    bio: string;
    description: string;
    recentPublications: string;
    viewAll: string;
  };
  about: {
    title: string;
  };
  cv: {
    title: string;
    workExperience: string;
    education: string;
    skills: string;
    interests: string;
    timeline: string;
  };
  skills: {
    title: string;
    description: string;
  };
  publications: {
    title: string;
    description: string;
  };
  books: {
    title: string;
    description: string;
    fictional: string;
    nonFictional: string;
    yearRead: string;
    legend: string;
  };
  skillCategories: {
    dataStack: string;
    dataStackDesc: string;
    frontendWeb: string;
    frontendWebDesc: string;
    infrastructureTools: string;
    infrastructureToolsDesc: string;
    securityResearch: string;
    securityResearchDesc: string;
    areasOfInterest: string;
    areasOfInterestDesc: string;
    previousExperience: string;
    previousExperienceDesc: string;
  };
  cvSkills: {
    mainSkills: string;
  };
  workExperience: {
    catenion: string;
    sopraSteri: string;
    helmholtz: string;
  };
  education: {
    wismar: string;
    bht: string;
    hwr: string;
    abitur: string;
  };
  nonTechnicalInterests: {
    cooking: string;
    swingDancing: string;
    sewing: string;
    sailing: string;
    mushroomHunting: string;
  };
  proficiency: {
    advanced: string;
    proficient: string;
    experienced: string;
    learning: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}
