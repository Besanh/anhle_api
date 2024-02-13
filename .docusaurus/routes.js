import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/anhle_api/vn/blog',
    component: ComponentCreator('/anhle_api/vn/blog', 'ba4'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/archive',
    component: ComponentCreator('/anhle_api/vn/blog/archive', '8f1'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/mie-tie',
    component: ComponentCreator('/anhle_api/vn/blog/mie-tie', '5c1'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/tags',
    component: ComponentCreator('/anhle_api/vn/blog/tags', '3f7'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/tags/anhle',
    component: ComponentCreator('/anhle_api/vn/blog/tags/anhle', '5be'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/tags/docusaurus',
    component: ComponentCreator('/anhle_api/vn/blog/tags/docusaurus', 'c99'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/tags/facebook',
    component: ComponentCreator('/anhle_api/vn/blog/tags/facebook', 'f39'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/tags/hello',
    component: ComponentCreator('/anhle_api/vn/blog/tags/hello', '206'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/tags/mie-tie',
    component: ComponentCreator('/anhle_api/vn/blog/tags/mie-tie', 'd17'),
    exact: true
  },
  {
    path: '/anhle_api/vn/blog/welcome',
    component: ComponentCreator('/anhle_api/vn/blog/welcome', '916'),
    exact: true
  },
  {
    path: '/anhle_api/vn/markdown-features-head-metadata',
    component: ComponentCreator('/anhle_api/vn/markdown-features-head-metadata', '6c7'),
    exact: true
  },
  {
    path: '/anhle_api/vn/markdown-page',
    component: ComponentCreator('/anhle_api/vn/markdown-page', 'ade'),
    exact: true
  },
  {
    path: '/anhle_api/vn/docs',
    component: ComponentCreator('/anhle_api/vn/docs', 'a9d'),
    routes: [
      {
        path: '/anhle_api/vn/docs/category/tutorial---extras',
        component: ComponentCreator('/anhle_api/vn/docs/category/tutorial---extras', '6e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/vn/docs/category/tutorial---open-weather-api',
        component: ComponentCreator('/anhle_api/vn/docs/category/tutorial---open-weather-api', '6c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/vn/docs/intro',
        component: ComponentCreator('/anhle_api/vn/docs/intro', '427'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/vn/docs/tutorial-basics/api-get-current-weather',
        component: ComponentCreator('/anhle_api/vn/docs/tutorial-basics/api-get-current-weather', '216'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/vn/docs/tutorial-basics/api-get-historical-weather',
        component: ComponentCreator('/anhle_api/vn/docs/tutorial-basics/api-get-historical-weather', 'd35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/vn/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/anhle_api/vn/docs/tutorial-extras/manage-docs-versions', '589'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/vn/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/anhle_api/vn/docs/tutorial-extras/translate-your-site', '609'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/anhle_api/vn/',
    component: ComponentCreator('/anhle_api/vn/', '5b4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
