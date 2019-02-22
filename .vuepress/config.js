module.exports = {
  title: 'Blogcast Documentation',
  description: 'The Blogcast documentation',
  themeConfig: {
    repo: 'tryblogcast/docs',
    editLinks: true,

    // nav: [
    //   {
    //     text: 'Blogcast',
    //     link: 'https://blogcast.host'
    //   }
    // ],
    sidebar: [['/', 'Starter Guide']]
    displayAllHeaders: true
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/medium-zoom',
    '@vuepress/pwa',
    'vuepress-plugin-export',
    'seo'
  ]
};
