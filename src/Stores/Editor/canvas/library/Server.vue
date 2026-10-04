<template>
  <svg
    :width="node.width"
    :height="node.height"
    class="server-shape"
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
      fill="#f9f9f9"
    />

    <!-- فتحات التهوية -->
    <line
      v-for="i in 4"
      :key="i"
      :x1="20"
      :y1="20 + i * 12"
      :x2="node.width - 20"
      :y2="20 + i * 12"
      stroke="#999"
      stroke-width="2"
      stroke-linecap="round"
    />

    <!-- اسم السيرفر -->
    <text
      :x="node.width / 2"
      :y="node.height / 2 - 5"
      text-anchor="middle"
      font-size="18"
      font-family="Arial"
      fill="#000"
    >
      {{ node.name }}
    </text>

    <!-- نص التقنية -->
    <text
      v-if="node.tech"
      :x="node.width / 2"
      :y="node.height / 2 + 25"
      text-anchor="middle"
      font-size="14"
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
.server-shape {
  cursor: pointer;
  user-select: none;
}
</style>
