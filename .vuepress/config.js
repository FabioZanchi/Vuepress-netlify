const getChildren = require('./childScript')

module.exports = {
  title: 'My Docs Site',
  description: '',
  // logo: '/images/logo.png',
  footer: '© Footer',
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Guides',
      items: [{
        text: 'Guide A',
        link: '/guides/guideA/'
      },
      {
        text: 'Guide B',
        link: '/guides/guideB/'
      },
      ]
    },
    {
      text: 'External',
      link: 'https://www.google.com/'
    },
    {
      text: 'Admin',
      link: '/admin/#/'
    }
    ],
    sidebar: {
      '/guides/guideA/': [{
        title: 'Guide A',
        children: getChildren('./guides/guideA/')
      }],
      '/guides/guideB/': [{
        title: 'Guide B',
        children: getChildren('./guides/guideB/')
      }]
    },
    activeHeaderLinks: true
  },
};