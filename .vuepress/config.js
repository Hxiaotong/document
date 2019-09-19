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
          { text: 'Vue', link: '/Vuex/Module' },
          { text: 'CodeStandards', link: '/CodeStandards/HTML' },
          { text: 'Tools', link: '/Tools/git' }
        ]
      },
      { text: 'document', link: 'https://github.com/Hxiaotong/document' },
    ],
    sidebar: {
      '/Javascript/': [
        'blog',
        'sort'
      ],
      '/ES6/': [
        'Array',
        'Object',
        'String',
        'Symbol',
        'Set和Map数据结构',
        'Proxy'
      ],
      '/Vuex/': [
        'Module',
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
        'nvm',
        'npm',
        '移动端调试'
      ]
    },
    lastUpdated: 'Last Updated'
  }
}