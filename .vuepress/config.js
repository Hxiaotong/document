module.exports = {
  title: '前端之路',
  description: 'Be there totally .',
  themeConfig: {
    nav: [
      {
        text: 'web前端',
        items: [
          { text: '面试', link: '/javascript/blog' }
        ]
      },
      { text: '文档', link: 'https://google.com' },
    ],
    sidebar: {
      '/javascript/':{
        title: '主页',
        children: [
          'blog'
        ]
      }
    }
  }
}