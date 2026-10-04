<template>
  <svg :width="node.width" :height="node.height">

    <!-- الجزء العلوي (البيضاوي) -->
    <ellipse
      :cx="node.width / 2"
      cy="25"
      :rx="node.width / 2 - 10"
      ry="20"
      stroke="#8b0000"
      stroke-width="3"
      fill="none"
    />

    <!-- الجسم -->
    <rect
      x="10"
      y="25"
      :width="node.width - 20"
      :height="node.height - 45"
      stroke="#8b0000"
      stroke-width="3"
      fill="none"
    />

    <!-- الجزء السفلي (البيضاوي) -->
    <ellipse
      :cx="node.width / 2"
      :cy="node.height - 20"
      :rx="node.width / 2 - 10"
      ry="20"
      stroke="#8b0000"
      stroke-width="3"
      fill="none"
    />

    <!-- النص -->
    <text
      :x="node.width / 2"
      :y="node.height - 5"
      text-anchor="middle"
      font-size="16"
      font-family="Arial"
      fill="#8b0000"
    >
      {{ node.name }}
    </text>

  </svg>
</template>

<script setup>
defineProps({
  node: Object
})
</script>
