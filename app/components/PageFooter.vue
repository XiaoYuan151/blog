<script setup>
defineProps({
  copy: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  icp: {
    type: String,
    required: true,
  },
  privacy: {
    type: String,
    required: true,
  },
  terms: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="footer">
    <p>
      &copy; {{ copy }} 2024-{{ new Date().getFullYear() }} {{ owner }}
      <span v-html="icp"></span>
    </p>
    <p>
      <a href="//www.xiaoyuan151.com/privacy">{{ privacy }}</a> |
      <a href="//www.xiaoyuan151.com/terms">{{ terms }}</a>
    </p>
  </div>
</template>

<style scoped>
:deep(a) {
  color: inherit;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
}

.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer :deep(a) {
  font-weight: bold;
}

.footer :deep(a:hover) {
  color: var(--color-border-hover);
}

.footer hr {
  width: 100vw;
  height: 1px;
  border: none;
  background-color: var(--color-border);
  margin: 8px 0;
}
</style>
