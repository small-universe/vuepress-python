
const getConfig = require("vuepress-bar");
const  { nav, sidebar } = getConfig({ pinyinNav: true });
//不使用中文， pinyinNav可以去掉

module.exports = {
  title: 'Python | 全栈开发',   // 网站标题
  description: 'Python 中的 Java搬砖工',   // 网站描述
  base: '/',      //  部署到github、gitee等仓库中的路径配置, 默认 '/'  可以使用二级地址 '/base/'

  /**
   * =========================
   * |     【PWA配置】       |                 
   * ========================= 
   */
  head: [
    /** 注入到当前页面的 HTML <head> 中的标签 */
    ['link', { rel: 'icon', href: '/logo-1.png' }]  // 增加一个自定义的 favicon(网页标签的图标), '/' 对应到 '.vuepress/public'
  ],

  /**
   * =========================
   * |   【Markdown配置】    |                 
   * ========================= 
   */
  markdown: {
    lineNumbers: true,   // 代码块显示行号
    anchor: { permalink: false },   // markdown-it-anchor 的选项
    toc: { includeLevel: [1, 2, 3, 4] },  // markdown-it-toc 的选项
    extractHeaders: [ 'h2', 'h3', 'h4' ],
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件! https://markdown-it.docschina.org/
      md.use(require('markdown-it-mark'))
      md.render('==marked==')
    }
  },

  /**
   * =========================
   * |    【主题配置】       |                 
   * ========================= 
   */
  // theme: 'reco',  // 指定使用自定义的主题, 否则使用默认主题,下面的配置依赖于你正在使用的主题
  themeConfig: {

    /**-----------【主题配置:导航】-----------*/
    logo: '/logo-1.png',  // 导航栏 Logo
    nav: [
      { text: '首页', link: '/' },
      ...nav
    ],        // 导航栏, 配置内容被单独提取到同级目录下的config/navbar
    sidebar,   // 侧边栏, 配置内容被单独提取到同级目录下的config/sidebar
    // sidebar: 'auto',    // 侧边栏自动配置, 可以和自定义的侧边栏兼容, 优先使用自定义的侧边栏
    // sidebarDepth: 2,    // 侧边栏显示,最大深度为2
    
    smoothScroll: true,    // 页面滚动效果
    lastUpdated: 'Last Updated',  // 最后更新时间

    

    /**-----------【主题配置:搜素】-----------*/
    /** Algolia替换默认的搜索 */
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }

    /**-----------【主题配置:仓库】-----------*/
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'small-universe/vuepress-python-full-stack',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'small-universe/vuepress-python',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '改善此页面！'
  },

  /**
   * 使用插件
   */
   plugins: [
      // ['vuepress-plugin-toolbar', {
      //   pageNav: {
      //     icon: '',
      //     name: '导航'
      //   }
      // }], 
      ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }],  // 页面滚动时激活侧边栏
     ['@vuepress/back-to-top'],  // 回到顶部
     ['@vuepress/pwa', {
      serviceWorker: true,  // 是否开启 PWA
      updatePopup: true
      }
     ],
     ['photo-swipe'],  // 图片预览
     ['permalink-pinyin'], // 侧边栏自动生成
     ["rpurl"], // 中文路径转拼音
     ['vuepress-plugin-code-copy', false], //官方代码复制插件
     [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: { title: "🎉", content: "复制成功" }
      }
    ], // 社区代码赋值插件
    [
      "@mr-hope/reading-time",
      {
        number: 260 // 每分钟阅读字数
      },
    ], // 预计阅读时间与字数统计
     [
      "md-enhance",
      {
        // 启用 TeX 支持
        tex: true,
      },
    ],
   
    ]
}