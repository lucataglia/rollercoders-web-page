import slugify from 'slugify';

const HOME_PAGE = 'Home';
const PROJECTS = 'Projects';
const TEAM = 'Team';

const PROJECTS_BUILD_A_BUILD = 'Build-A-Build';
const PROJECTS_FORMULA_ASSISTANT = 'Formula Assistant';
const PROJECTS_PANKOV = 'Pankov';

const PROJECTS_BUILD_A_BUILD_SLUG = '/projects/build-a-build';
const PROJECTS_FORMULA_ASSISTANT_SLUG = '/projects/formula-assistant';
const PROJECTS_PANKOV_SLUG = '/projects/pankov';

const HOME_PAGE_SLUG = '/';
const PROJECTS_SLUG = PROJECTS_PANKOV_SLUG;
const TEAM_SLUG = `/${slugify(TEAM, { lower: true })}/`;

const mapping = {
  [HOME_PAGE_SLUG]: HOME_PAGE,
  [PROJECTS_SLUG]: PROJECTS,
  [TEAM_SLUG]: TEAM,
};

export default {
  TEAM_SLUG,
  TEAM,
  HOME_PAGE_SLUG,
  HOME_PAGE,
  PROJECTS_BUILD_A_BUILD_SLUG,
  PROJECTS_BUILD_A_BUILD,
  PROJECTS_FORMULA_ASSISTANT_SLUG,
  PROJECTS_FORMULA_ASSISTANT,
  PROJECTS_PANKOV_SLUG,
  PROJECTS_PANKOV,
  PROJECTS_SLUG,
  PROJECTS,
  mapping,
};
