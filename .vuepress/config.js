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
    sidebar: [
      ['/', 'Starter Guide'],
      ['medium-embeds', 'Medium Embeds'],
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
