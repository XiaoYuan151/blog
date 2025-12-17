<script setup>
import { onMounted, ref } from "vue";

const tab = ref(0);
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle_1: {
    type: String,
    required: true,
  },
  subtitle_2: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    required: false,
  },
});
defineEmits(["tab"]);
</script>

<template>
  <div class="header">
    <div class="title">
      <img alt="avatar" src="https://img.xiaoyuan151.net/avatar.jpg" />
      <h1>{{ title }}</h1>
    </div>
    <p>{{ subtitle_1 }}</p>
    <p v-html="subtitle_2" class="subtitle"></p>
    <div class="bar">
      <div v-for="tabs in list">
        <a
          @click="
            $emit('tab', tabs.id);
            tab = tabs.id;
          "
          :class="{ select: tab === tabs.id }"
          >{{ tabs.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(a) {
  color: inherit;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
}

.header {
  width: 100%;
  margin: 24px auto 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.header p {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.header hr {
  width: 70vw;
  height: 1px;
  border: none;
  background-color: var(--color-border);
}

.title {
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.title img {
  height: 80px;
  border-radius: 10px;
}

.subtitle :deep(a) {
  font-weight: bold;
}

.subtitle :deep(a:hover) {
  color: var(--color-border-hover);
}

.bar {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.bar a {
  position: relative;
  text-decoration: none;
  padding-bottom: 3px;
}

.bar a:hover {
  color: var(--color-border-hover);
}

.bar a:hover::after {
  content: "";
  left: 50%;
  bottom: 0;
  width: 50%;
  height: 3px;
  position: absolute;
  transform: translate(-50%, 30%);
  border-radius: 3px;
  background: var(--color-border-hover);
}

.select {
  font-weight: bold;
}

.select::after {
  content: "";
  left: 50%;
  bottom: 0;
  width: 50%;
  height: 3px;
  position: absolute;
  transform: translate(-50%, 30%);
  border-radius: 3px;
  background: var(--color-border);
}
</style>
