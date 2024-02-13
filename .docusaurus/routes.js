import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/open_api/vn/blog',
    component: ComponentCreator('/open_api/vn/blog', 'bfb'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/archive',
    component: ComponentCreator('/open_api/vn/blog/archive', '271'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/mie-tie',
    component: ComponentCreator('/open_api/vn/blog/mie-tie', 'b87'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/tags',
    component: ComponentCreator('/open_api/vn/blog/tags', '57b'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/tags/anhle',
    component: ComponentCreator('/open_api/vn/blog/tags/anhle', '610'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/tags/docusaurus',
    component: ComponentCreator('/open_api/vn/blog/tags/docusaurus', '167'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/tags/facebook',
    component: ComponentCreator('/open_api/vn/blog/tags/facebook', '32b'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/tags/hello',
    component: ComponentCreator('/open_api/vn/blog/tags/hello', 'b77'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/tags/mie-tie',
    component: ComponentCreator('/open_api/vn/blog/tags/mie-tie', '66a'),
    exact: true
  },
  {
    path: '/open_api/vn/blog/welcome',
    component: ComponentCreator('/open_api/vn/blog/welcome', '378'),
    exact: true
  },
  {
    path: '/open_api/vn/markdown-features-head-metadata',
    component: ComponentCreator('/open_api/vn/markdown-features-head-metadata', '44b'),
    exact: true
  },
  {
    path: '/open_api/vn/markdown-page',
    component: ComponentCreator('/open_api/vn/markdown-page', 'cc1'),
    exact: true
  },
  {
    path: '/open_api/vn/docs',
    component: ComponentCreator('/open_api/vn/docs', '1a6'),
    routes: [
      {
        path: '/open_api/vn/docs/category/tutorial---extras',
        component: ComponentCreator('/open_api/vn/docs/category/tutorial---extras', 'd43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/vn/docs/category/tutorial---open-weather-api',
        component: ComponentCreator('/open_api/vn/docs/category/tutorial---open-weather-api', '72a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/vn/docs/intro',
        component: ComponentCreator('/open_api/vn/docs/intro', '09a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/vn/docs/tutorial-basics/api-get-current-weather',
        component: ComponentCreator('/open_api/vn/docs/tutorial-basics/api-get-current-weather', '80c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/vn/docs/tutorial-basics/api-get-historical-weather',
        component: ComponentCreator('/open_api/vn/docs/tutorial-basics/api-get-historical-weather', '184'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/vn/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/open_api/vn/docs/tutorial-extras/manage-docs-versions', '149'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/vn/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/open_api/vn/docs/tutorial-extras/translate-your-site', 'dec'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/open_api/vn/',
    component: ComponentCreator('/open_api/vn/', 'b40'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
