<script setup>
import { onMounted } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "@fontsource/noto-sans-sc/400.css";
import "@fontsource/google-sans-code/400.css";

onMounted(() => {
  hljs.highlightAll();
});
</script>

<template>
  <NuxtPage />
</template>

<style>
body {
  margin: 0;
  overflow-y: auto;
  position: relative;
  font-family: "Noto Sans SC", sans-serif;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
</style>
