<script setup>
import "@fontsource/noto-sans-sc/400.css";
import "@fontsource/google-sans-code/400.css";
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
