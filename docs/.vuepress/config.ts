import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/rkzj/',
  lang: 'zh-CN',
  title: '根瘤菌rkzj',
  description: '根瘤菌rkzj的模型教程',
  head: [['link',{rel: 'shortcut icon', href: 'favicon.ico',type: 'image/x-icon'}]],

  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: 'logo.jpg',
    navbar: [
        {
          text: '模型下载',
          link: '//rkzj.skymkmk.com',
        },
        {
            text: '根瘤菌b站空间',
            link: '//space.bilibili.com/23315579'
        },
        {
            text: '商单合作',
            link: '//rkzj.skymkmk.com/order'
        }
      ],
      repo: 'skymkmk/rkzj-docs',
      repoLabel: '离线文档',
      sidebar: [
        '/README.md',
        '/group.md',
        '/group-rule.md'
      ],
      editLink: true,
      editLinkText: '编辑此页',
      docsBranch: 'master',
      docsDir: 'docs',
      lastUpdated: true,
      lastUpdatedText: '上次更新',
      contributors: true,
      contributorsText: '贡献者'
    },
})