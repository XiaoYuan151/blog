<script setup>
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const route = useRoute();
const { data: page } = await useAsyncData(
  "page-" + route.path,
  () => {
    return queryCollection("content").path(route.path).first();
  },
  {
    lazy: true,
  },
);
const cn = ref(false);
onMounted(async () => {
  await nextTick();
  const twikoo = await import("twikoo");
  document.body.style.overflowY = "auto";
  if (page) {
    document.title = page.title;
    useSeoMeta({
      description: page.description,
    });
  }
  if (location.hostname.endsWith(".cn")) {
    cn.value = true;
  }
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      twikoo.init({
        envId: "https://twikoo.xiaoyuan151.net/.netlify/functions/twikoo",
        el: "#twikoo",
        path: location.pathname,
      });
      hljs.highlightAll();
    });
  } else {
    setTimeout(() => {
      twikoo.init({
        envId: "https://twikoo.xiaoyuan151.net/.netlify/functions/twikoo",
        el: "#twikoo",
        path: location.pathname,
      });
      hljs.highlightAll();
    }, 1500);
  }
});
</script>

<template>
  <main>
    <header>
      <PageHeader
        v-if="page"
        :title="page.title"
        :subtitle_1="page.description"
        subtitle_2="<a href='/'><- 返回首页</a>"
      />
    </header>
    <div class="content">
      <ContentRenderer v-if="page" :value="page" class="post" />
    </div>
    <div v-if="cn === false" id="twikoo"></div>
    <footer>
      <PageFooter
        v-if="page"
        copy="版权所有"
        owner="小源151 | 保留所有权利 |"
        icp="<a href='https://icp.gov.moe/?keyword=20250319' target='_blank'>萌ICP备20250319号</a>"
        privacy="隐私政策"
        terms="使用条款"
      />
    </footer>
  </main>
</template>

<style>
a {
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  user-select: none;
}

a:hover {
  color: var(--color-border-hover);
}

main {
  width: 100%;
  height: 100vh;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  padding: 14px 6px 38px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: visible;
  padding-bottom: 14px;
}

.post {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.post h1 {
  font-size: 24px;
  font-weight: bold;
}

.post h2 {
  font-size: 20px;
  font-weight: bold;
}

.post h3 {
  font-size: 18px;
  font-weight: bold;
}

.post ol {
  padding-inline-start: 24px;
}

.post img {
  width: calc(16px * 30);
  height: calc(9px * 30);
  display: block;
  object-fit: cover;
  object-position: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.post details {
  user-select: none;
  cursor: pointer;
}

.post details img {
  margin-bottom: 6px;
  border-radius: 10px;
}

.post code {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 3px;
  background-color: var(--color-background-soft);
  font-family: "Google Sans Code", monospace;
}

footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
}
</style>
