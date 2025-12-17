// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title: "博客",
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "description",
          content:
            "欢迎来到小源151官方博客！在这里，您可以找到关于编程、生活、杂谈等方面的文章。我们致力于分享我们的经验和见解，与您共同成长。欢迎订阅我们的博客，与我们一起探索知识的海洋！",
        },
        { name: "keywords", content: "小源151,官方,博客" },
        { name: "og:type", content: "website" },
        { name: "og:title", content: "博客" },
        {
          name: "og:description",
          content:
            "欢迎来到小源151官方博客！在这里，您可以找到关于编程、生活、杂谈等方面的文章。我们致力于分享我们的经验和见解，与您共同成长。欢迎订阅我们的博客，与我们一起探索知识的海洋！",
        },
        { name: "og:url", content: "https://blog.xiaoyuan151.com" },
        { name: "og:image", content: "https://img.xiaoyuan151.net/banner.jpg" },
        { name: "og:site_name", content: "博客" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "博客" },
        {
          name: "twitter:description",
          content:
            "欢迎来到小源151官方博客！在这里，您可以找到关于编程、生活、杂谈等方面的文章。我们致力于分享我们的经验和见解，与您共同成长。欢迎订阅我们的博客，与我们一起探索知识的海洋！",
        },
        {
          name: "twitter:image",
          content: "https://img.xiaoyuan151.net/banner.jpg",
        },
        { name: "twitter:site", content: "@XiaoYuan151" },
        { name: "twitter:creator", content: "@XiaoYuan151" },
      ],
    },
    rootAttrs: {
      id: "root",
    },
  },
  content: {
    build: {
      markdown: {
        highlight: false,
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
});
