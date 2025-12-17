<script setup>
import PageHeader from "@/components/PageHeader.vue";
import PageSection from "@/components/PageSection.vue";
import PageFooter from "@/components/PageFooter.vue";

const { data: contents } = await useAsyncData("contents", () => {
  return queryCollection("content").order("date", "DESC").all();
});
const tab = ref(0);
const tabs = [
  {
    id: 0,
    name: "文章",
  },
  {
    id: 1,
    name: "友链",
  },
  {
    id: 2,
    name: "归档",
  },
  {
    id: 3,
    name: "关于",
  },
];
useSeoMeta({
  description: "1",
  ogImage: "1",
});
onMounted(() => {
  document.title = "title";
  document.body.style.overflowY = "hidden";
  if (location.hostname.endsWith(".cn")) {
    // cn.value = true;
  }
});
</script>

<template>
  <main>
    <header>
      <PageHeader
        title="博客"
        subtitle_1="欢迎来到小源151官方博客！"
        subtitle_2="如对页面内容有任何疑问，请联系：<a href='mailto:contact@xiaoyuan151.com'>contact@xiaoyuan151.com</a>"
        :list="tabs"
      />
    </header>
    <div class="content">
      <PageSection v-if="tab === 0" :list="contents" />
    </div>
    <footer>
      <PageFooter
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
  text-decoration: none;
  user-select: none;
}

main {
  width: 100%;
  height: 100vh;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  padding: 14px 6px 38px;
}

.content {
  width: 100%;
  height: auto;
  flex: 1;
  overflow-y: scroll;
}
</style>
