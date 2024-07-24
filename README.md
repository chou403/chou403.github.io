# 写在前面

此 Blog 基于 astro + tina cms + tailwindcss + typescript

## 内容

1. [特性](#features)
2. [发展路线图](#roadmap)
3. [技术栈](#stack)
4. [本地运行](#locally)
5. [配置步骤](#configure)
6. [添加分类](#categories)
7. [添加文章](#posts)
8. [草稿模式](#draft)
9. [前言信息](#frontMatter)
10. [命令](#commands)

<h2 id="features"> 💪 特性 </h2>

- ✅ 极简风格
- ✅ 移动响应式设计
- ✅ Lighthouse 性能评分100/100
- ✅ 通过规范 URL 和 OpenGraph 数据实现 SEO 优化
- ✅ Sitemap 支持
- ✅ RSS 订阅支持
- ✅ Markdown 和 MDX 格式支持
- ✅ 代码高亮显示
- ✅ 图片优化
- ✅ 目录导航
- ✅ 暗黑模式
- ✅ 阅读时间显示
- ✅ Pagefind 静态搜索库集成
- ✅ 相关文章推荐
- ✅ 分享文章(LinkedIn, Twitter)
- ✅ 草稿模式
- ✅ 复制代码块功能
- ✅ 仓库内的 CMS 系统(Tina CMS)
- ✅ 分页功能
- ✅ 视图过渡效果
- ✅ 最近一次更新时间(新添加)
- ✅ 菜单栏动态滚动(0604新添加)
- ✅ Header 固定(0605新添加)
- ✅ 移动端适配标题栏(0606新添加)

<h2 id="roadmap"> 🛣️ 发展路线图 </h2>

- ❌ 添加文章作者信息
- ❌ 添加自定义颜色设置
- ❌ 添加按阅读时间、日期等筛选功能
- ❌ 更多分享选项
- ❌ 国际化(i18n)

<h2 id="stack"> ⚙️ 技术栈 </h2>

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro 是一个专为速度设计的全合一网页框架。
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/) - Tailwind CSS 是一个以实用优先的 CSS 框架。
- [**Tabler Icons**](https://tabler-icons.io/i/) - 一套开源的 SVG 图标集。
- [**Eslint**](https://eslint.org/) - Eslint 是一个开源项目,帮助您发现并修复代码问题。
- [**Prettier**](https://prettier.io/) - 代码格式化工具。
- [**Search Library**](https://pagefind.app/) - 静态搜索库集成。
- [**Motion**](https://motion.dev/) - Motion One 是网络上最小巧但功能齐全的动画库。
- [**Tina CMS**](https://tina.io/) - 内容管理系统。

<h2 id="locally"> 👨🏻‍💻 本地运行 </h2>

**推荐的 VSCode 扩展:**

- [Tailwind CSS 智能感知](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

1. 克隆或者 [fork](https://github.com/chou401/chou401.github.io/fork) 仓库

   ```sh
   git@github.com:chou401/chou401.github.io.git
   ```

2. 安装依赖:

   ```sh
   pnpm install
   ```

3. 本地启动:

   ```sh
   pnpm dev
   ```

<h2 id="configure"> 📐 配置步骤 </h2>

- 编辑基本博客元数据的配置文件 **src/data/site.config.ts**。
- 根据您的个人域名更新项目根目录下的 **astro.config.mjs** 文件。
- 修改 **/public** 文件夹中的文件:
  - favicon(网站图标)
  - robots.txt -> 将其中的 Sitemap URL 更新为您的个人域名。
  - open-graph -> open-graph 图像是在分享博客链接时展示的图片。对于帖子而言,预览图即是帖子的封面图。
- 在头部组件 **src/components/Header.astro** 中编辑社交网络信息,将链接更改为您的社交网络地址。

<h2 id="categories"> 🗂️ 添加分类 </h2>

要向博客中添加新的分类,只需前往 `src/data/categories.ts` 文件,并将其添加到数组中。

示例:

```ts
export  const  CATEGORIES  =  [
'JavaScript',
'React',
'new category here'  <---
]  as  const
```

> ⚠️ Zod 检查 markdown 文档的属性中分类是否书写不正确或不存在。**在构建应用程序时,这将抛出错误。** ⚠️

<h2 id="posts"> 📄 添加文章 </h2>

添加文章就像在路径 **src/content/blog** 的博客文件夹中添加 .md 或 .mdx 文件一样简单。文件名将用于生成页面的slug/URL。

例如,如果你有一个名为 **jsx-and-react.md** 的文件,它将转换为:http `http://yourdomain.com/post/jsx-and-react/`

<h2 id="draft"> 📝 启用草稿模式 </h2>

要启用草稿模式,在文件中添加属性 **draft: true**,这样文章就不会再显示在博客上了。

示例 :

```ts
author: chou401
publishDate: 2022-09-25T15:20:35Z
updatedDate: 2024-02-22T00:37:27Z
title: CompletableFuture
heroImage: ../../assets/images/cat-3.jpeg
category: Java
tags:
  - java
  - thread
description: CompletableFuture 线程处理代码片段
draft: true <---
```

<h2 id="frontMatter"> ⚡️ 前言信息 </h2>

## 必需属性

- 标题
- 描述
- 发布日期
- 更新日期
- 封面图片(post cover)
- 分类(从 src/data/categories.ts 中选择)

## 可选属性

- 草稿(无需包含,默认为 false)
- 标签

> 文章的架构位于 src/content/config.ts。你可以修改任何参数,例如,限制标题最多80个字符:title: z.string().max(80)。
> 更多信息,请参阅 zod 文档。

<h2 id="commands"> 🧞 命令 </h2>

所有命令都需要在项目的根目录下,通过终端执行:

| 命令                    | 动作                                                                                                                 |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`          | 安装依赖                                                                                                             |
| `pnpm run dev`          | 启动本地开发服务器于 `localhost:3000`                                                                                |
| `pnpm run build`        | 构建生产环境的网站至 `./dist/`                                                                                       |
| `pnpm run preview`      | 在本地预览构建,部署前检查效果                                                                                        |
| `pnpm run format:check` | 使用 Prettier 检查代码格式                                                                                           |
| `pnpm run format`       | 使用 Prettier 格式化代码                                                                                             |
| `pnpm run sync`         | 为所有 Astro 模块生成 TypeScript 类型。 [了解更多](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`         | 使用 ESLint 进行代码检查                                                                                             |
