module.exports = {
  title: 'Blogcast',
  description: 'The Blogcast documentation',
  themeConfig: {
    nav: [
      {
        text: 'Blogcast',
        link: 'https://blogcast.host'
      }
    ],
    sidebar: [['/', 'Starter Guide']]
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/medium-zoom',
    '@vuepress/pwa',
    'vuepress-plugin-export',
    'seo'
  ]
};
