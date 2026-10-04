<template>
  <svg
    :width="node.width"
    :height="node.height"
    class="browser-shape"
    xmlns="http://www.w3.org/2000/svg"
  >

    <!-- الإطار الخارجي -->
    <rect
      x="0"
      y="0"
      :width="node.width"
      :height="node.height"
      rx="12"
      ry="12"
      stroke="#333"
      stroke-width="2"
      fill="#fff"
    />

    <!-- شريط المتصفح العلوي -->
    <rect
      x="0"
      y="0"
      :width="node.width"
      height="40"
      rx="12"
      ry="12"
      fill="#e5e5e5"
      stroke="#333"
      stroke-width="1"
    />

    <!-- أزرار النافذة (ثلاث دوائر) -->
    <circle cx="20" cy="20" r="6" fill="#ff5f57" />
    <circle cx="40" cy="20" r="6" fill="#ffbd2e" />
    <circle cx="60" cy="20" r="6" fill="#28c840" />

    <!-- عنوان المتصفح -->
    <text
      :x="node.width / 2"
      y="25"
      text-anchor="middle"
      font-size="14"
      fill="#333"
      font-family="Arial"
    >
      {{ node.name }}
    </text>

    <!-- نص التقنية -->
    <text
      v-if="node.tech"
      :x="node.width / 2"
      :y="node.height - 20"
      text-anchor="middle"
      font-size="13"
      fill="#555"
      font-family="Arial"
    >
      {{ node.tech }}
    </text>

    <!-- أيقونة التقنية -->
    <image
      v-if="node.techIcon"
      :href="node.techIcon"
      :x="node.width - 40"
      y="10"
      width="24"
      height="24"
    />

  </svg>
</template>

<script setup>
defineProps({
  node: Object
})
</script>

<style scoped>
.browser-shape {
  cursor: pointer;
  user-select: none;
}
</style>
