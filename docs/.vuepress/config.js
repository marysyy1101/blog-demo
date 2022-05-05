/*
 * @Author: 八点半的星光
 * @Date: 2022-05-05 17:07:22
 * @LastEditTime: 2022-05-05 17:09:12
 * @LastEditors: 八点半的星光
 * @Description:
 * @FilePath: \blog-demo\docs\.vuepress\config.js
 */
module.exports = {
  base: "/blog-demo/",
  title: "blog-demo",
  description: "Vuepress blog demo",
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: "https://github.com/xxxxxxx/blog-demo",
    // 自定义仓库链接文字。
    repoLabel: "My GitHub",
    nav: [
      { text: "Home", link: "/" },
      { text: "FirstBlog", link: "/blog/firstBlog.md" },
    ],
    sidebar: [
      ["/", "首页"],
      ["/blog/firstBlog.md", "我的第一篇博客"],
    ],
  },
};
