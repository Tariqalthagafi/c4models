<template>
  <svg
    :width="node.width"
    :height="node.height"
    class="cloud-shape"
    xmlns="http://www.w3.org/2000/svg"
  >

    <!-- شكل السحابة -->
    <path
      :d="`
        M ${node.width * 0.25} ${node.height * 0.55}
        C ${node.width * 0.10} ${node.height * 0.55},
          ${node.width * 0.10} ${node.height * 0.35},
          ${node.width * 0.25} ${node.height * 0.35}

        C ${node.width * 0.30} ${node.height * 0.20},
          ${node.width * 0.50} ${node.height * 0.20},
          ${node.width * 0.55} ${node.height * 0.35}

        C ${node.width * 0.75} ${node.height * 0.35},
          ${node.width * 0.75} ${node.height * 0.55},
          ${node.width * 0.60} ${node.height * 0.55}

        Z
      `"
      stroke="#4a90e2"
      stroke-width="3"
      fill="white"
    />

    <!-- اسم العنصر -->
    <text
      :x="node.width / 2"
      :y="node.height * 0.45"
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
      :y="node.height * 0.65"
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
.cloud-shape {
  cursor: pointer;
  user-select: none;
}
</style>
