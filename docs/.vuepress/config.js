module.exports = {
  title: 'Front-end Road',
  description: 'Be there totally .',
  base: 'document',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {
        text: 'React team',
        items: [
          { text: 'React', link: '/React/react.md' },
          { text: 'JSX', link: '/React/JSX.md' },
          { text: 'Hook', link: '/React/Hook.md' },
        ]
      },
      {
        text: 'Vue team',
        items: [
          { text: 'Vue', link: '/Vuex/Module' },
        ]
      },
      {
        text: 'Js team',
        items: [
          { text: 'Javascript', link: '/Javascript/blog' },
          { text: 'ES6', link: '/ES6/Array' },
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Git', link: '/Tools/git' },
          { text: 'Nginx', link: '/Tools/nginx' },
          { text: 'npm', link: '/Tools/npm' },
          { text: 'n', link: '/Tools/n' },
          { text: 'nvm', link: '/Tools/nvm' },
          { text: 'sentry', link: '/Tools/sentry' }
        ]
      },
      {
        text: 'others',
        items: [
          { text: 'CodeStandards', link: '/CodeStandards/HTML' },
          { text: 'Workbook', link: '/Workbook/array' }
        ]
      },
      { text: 'document', link: 'https://github.com/Hxiaotong/document' },
    ],
    sidebar: {
      '/React/': [
        'react',
        'JSX',
        'Hook'
      ],
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
        'n',
        'npm',
        'sentry',
        '移动端调试'
      ],
      '/Workbook/': [
        'array',
        'string'
      ]
    },
    lastUpdated: 'Last Updated'
  },
  Markdown: {
    externalLinks: {
      target: '_self', rel: 'noopener noreferrer'
    }
  }
}