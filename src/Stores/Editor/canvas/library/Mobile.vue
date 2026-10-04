<template>
  <svg
    :width="node.width"
    :height="node.height"
    class="mobile-shape"
    xmlns="http://www.w3.org/2000/svg"
  >

    <!-- الإطار الخارجي للهاتف -->
    <rect
      x="0"
      y="0"
      :width="node.width"
      :height="node.height"
      rx="25"
      ry="25"
      stroke="#333"
      stroke-width="2"
      fill="#fff"
    />

    <!-- سماعة الهاتف -->
    <rect
      :x="node.width / 2 - 25"
      y="15"
      width="50"
      height="6"
      rx="3"
      fill="#333"
    />

    <!-- زر الهوم -->
    <circle
      :cx="node.width / 2"
      :cy="node.height - 20"
      r="10"
      stroke="#333"
      stroke-width="2"
      fill="none"
    />

    <!-- اسم العنصر -->
    <text
      :x="node.width / 2"
      :y="node.height / 2 - 10"
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
.mobile-shape {
  cursor: pointer;
  user-select: none;
}
</style>
