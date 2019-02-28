module.exports = {
  title: 'Blogcast Documentation',
  description: 'The Blogcast documentation',
  themeConfig: {
    repo: 'tryblogcast/docs',
    editLinks: true,

    nav: [
      {
        text: 'API Reference',
        link: 'https://documenter.getpostman.com/view/1291260/S11GReyc'
      }
    ],
    sidebar: [
      ['/', 'Starter Guide'],
      ['medium-embeds', 'Medium Embeds'],
      ['dev-embeds', 'DEV.to Embeds'],
    ],
    displayAllHeaders: true
  },
  plugins: [
    // '@vuepress/plugin-pwa',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    'export',
    // 'seo',
    'autometa',
  ]
};
