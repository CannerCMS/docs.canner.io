/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  cname: 'docs.canner.io',
  title: 'CannerIO (alpha)' /* title for your website */,
  tagline: 'CannerIO official documentation',
  url: 'https://docs.canner.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs.canner.io',
  organizationName: 'Canner',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://framework.canner.io/docs/why-canner.html', external: true, label: "Why"},
    {doc: 'start-installation', label: 'Docs'},
    {href: 'https://framework.canner.io', external: true, label: "Open source"},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/icon.png',
  footerIcon: 'img/logo-word-white.png',
  favicon: 'img/icon.png',

  /* colors for website */
  colors: {
    primaryColor: '#f2b173',
    secondaryColor: '#e4506d',
  },


  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' CannerIO.  Canner, Inc.',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/og-image.jpg',
  twitterImage: 'img/og-image.jpg',

  gaTrackingId: "UA-63519210-12",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/canner/canner',
};

module.exports = siteConfig;
