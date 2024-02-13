import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/open_api/__docusaurus/debug',
    component: ComponentCreator('/open_api/__docusaurus/debug', '9ff'),
    exact: true
  },
  {
    path: '/open_api/__docusaurus/debug/config',
    component: ComponentCreator('/open_api/__docusaurus/debug/config', '496'),
    exact: true
  },
  {
    path: '/open_api/__docusaurus/debug/content',
    component: ComponentCreator('/open_api/__docusaurus/debug/content', '266'),
    exact: true
  },
  {
    path: '/open_api/__docusaurus/debug/globalData',
    component: ComponentCreator('/open_api/__docusaurus/debug/globalData', '7ae'),
    exact: true
  },
  {
    path: '/open_api/__docusaurus/debug/metadata',
    component: ComponentCreator('/open_api/__docusaurus/debug/metadata', '31b'),
    exact: true
  },
  {
    path: '/open_api/__docusaurus/debug/registry',
    component: ComponentCreator('/open_api/__docusaurus/debug/registry', 'b39'),
    exact: true
  },
  {
    path: '/open_api/__docusaurus/debug/routes',
    component: ComponentCreator('/open_api/__docusaurus/debug/routes', 'bc3'),
    exact: true
  },
  {
    path: '/open_api/blog',
    component: ComponentCreator('/open_api/blog', 'ebc'),
    exact: true
  },
  {
    path: '/open_api/blog/archive',
    component: ComponentCreator('/open_api/blog/archive', 'cc6'),
    exact: true
  },
  {
    path: '/open_api/blog/mie-tie',
    component: ComponentCreator('/open_api/blog/mie-tie', '41c'),
    exact: true
  },
  {
    path: '/open_api/blog/tags',
    component: ComponentCreator('/open_api/blog/tags', '432'),
    exact: true
  },
  {
    path: '/open_api/blog/tags/anhle',
    component: ComponentCreator('/open_api/blog/tags/anhle', '63b'),
    exact: true
  },
  {
    path: '/open_api/blog/tags/docusaurus',
    component: ComponentCreator('/open_api/blog/tags/docusaurus', '7bf'),
    exact: true
  },
  {
    path: '/open_api/blog/tags/facebook',
    component: ComponentCreator('/open_api/blog/tags/facebook', 'cb5'),
    exact: true
  },
  {
    path: '/open_api/blog/tags/hello',
    component: ComponentCreator('/open_api/blog/tags/hello', '604'),
    exact: true
  },
  {
    path: '/open_api/blog/tags/mie-tie',
    component: ComponentCreator('/open_api/blog/tags/mie-tie', '6db'),
    exact: true
  },
  {
    path: '/open_api/blog/welcome',
    component: ComponentCreator('/open_api/blog/welcome', '5f1'),
    exact: true
  },
  {
    path: '/open_api/markdown-features-head-metadata',
    component: ComponentCreator('/open_api/markdown-features-head-metadata', '4cb'),
    exact: true
  },
  {
    path: '/open_api/markdown-page',
    component: ComponentCreator('/open_api/markdown-page', '669'),
    exact: true
  },
  {
    path: '/open_api/docs',
    component: ComponentCreator('/open_api/docs', 'c01'),
    routes: [
      {
        path: '/open_api/docs/category/tutorial---extras',
        component: ComponentCreator('/open_api/docs/category/tutorial---extras', '465'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/docs/category/tutorial---open-weather-api',
        component: ComponentCreator('/open_api/docs/category/tutorial---open-weather-api', '8b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/docs/intro',
        component: ComponentCreator('/open_api/docs/intro', '7d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/docs/tutorial-basics/api-get-current-weather',
        component: ComponentCreator('/open_api/docs/tutorial-basics/api-get-current-weather', 'd83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/docs/tutorial-basics/api-get-historical-weather',
        component: ComponentCreator('/open_api/docs/tutorial-basics/api-get-historical-weather', '6ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/open_api/docs/tutorial-extras/manage-docs-versions', '96a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/open_api/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/open_api/docs/tutorial-extras/translate-your-site', '9e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/open_api/',
    component: ComponentCreator('/open_api/', '69f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
