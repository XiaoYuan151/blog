<script setup>
defineProps({
  subtitle: {
    type: String,
    required: false,
  },
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="section">
    <h3 v-if="subtitle">{{ subtitle }}</h3>
    <div v-for="content in list">
      <a :href="content.path">
        <h2>{{ content.title }}</h2>
        <h3>{{ content.description }}</h3>
        <h4>
          <NuxtTime
            :datetime="content.date"
            year="numeric"
            month="long"
            day="numeric"
          />
        </h4>
      </a>
    </div>
  </section>
</template>

<style scoped>
:deep(a) {
  color: inherit;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  user-select: none;
}

.section h2 {
  font-size: 16px;
  padding-left: 4px;
}

.section h3 {
  font-size: 14px;
  padding-left: 4px;
}

.section h4 {
  font-size: 10px;
  padding-left: 4px;
}

.section a {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  padding: 0 10px 0 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--color-background-soft);
  transition: border-color 0.3s ease;
}

.section a:hover {
  border-color: var(--color-border-hover);
  background-color: var(--color-background-mute);
}
</style>
