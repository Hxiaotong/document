module.exports = {
  title: 'Front-end Road',
  description: 'Be there totally .',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {
        text: 'web development',
        items: [
          { text: 'Javascript', link: '/Javascript/blog' },
          { text: 'ES6', link: '/ES6/Array' },
          { text: 'CodeStandards', link: '/CodeStandards/HTML' },
          { text: 'Tools', link: '/Tools/git' }
        ]
      },
      { text: 'document', link: 'https://github.com/Hxiaotong/document' },
    ],
    sidebar: {
      '/Javascript/': [
        'blog'
      ],
      '/ES6/': [
        'Array',
        'Object',
        'String',
        'Symbol'
      ],
      '/CodeStandards/': [
        'HTML',
        'Javascript',
        'CSS',
        'VUE'
      ],
      '/Tools/': [
        'git',
        'nginx',
        'nvm'
      ]
    },
    lastUpdated: 'Last Updated'
  }
}