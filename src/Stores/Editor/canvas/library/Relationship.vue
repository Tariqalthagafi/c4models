<template>
  <svg
    :width="shape.width"
    :height="shape.height"
    viewBox="0 0 300 90"
    class="relationship-shape"
  >
    <!-- الخط -->
    <line
      x1="10"
      y1="45"
      x2="260"
      y2="45"
      stroke="#000"
      stroke-width="3"
    />

    <!-- السهم -->
    <polygon
      points="260,45 240,35 240,55"
      fill="#000"
    />

    <!-- اسم العلاقة -->
    <text
      x="130"
      y="25"
      text-anchor="middle"
      font-size="16"
      font-family="Arial"
      fill="#000"
    >
      {{ shape.name }}
    </text>

    <!-- أيقونة التقنية -->
    <image
      v-if="shape.techIcon"
      :href="shape.techIcon"
      x="115"
      y="55"
      width="22"
      height="22"
    />

    <!-- نص التقنية -->
    <text
      v-if="shape.tech"
      x="140"
      y="72"
      text-anchor="start"
      font-size="14"
      font-family="Arial"
      fill="#555"
    >
      {{ shape.tech }}
    </text>

  </svg>
</template>

<script setup>
const props = defineProps({
  shape: Object
})
</script>

<style scoped>
.relationship-shape {
  cursor: pointer;
  user-select: none;
}
</style>
