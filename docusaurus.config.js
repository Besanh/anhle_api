// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AnhLe API',
  tagline: 'Tik Tac Toe',
  favicon: 'img/upload/logo-4la.png',

  // Set the production url of your site here
  url: 'https://besanh.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/anhle_api/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Besanh', // Usually your GitHub org/user name.
  projectName: 'anhle_api', // Usually your repo name.
  deploymentBranch: "publish",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vn'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      vn: {
        label: 'Vietnamese',
        direction: 'ltr',
        htmlLang: 'vi-VN',
        calendar: 'gregory',
        path: 'vn',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo-4la.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Home Logo',
          src: 'img/upload/logo-4la.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Besanh/open_api',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Besanh',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/anh-le-425055124/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/anhle32',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCpft3wCbY_RegsPYaZeBdWA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AnhLe.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
