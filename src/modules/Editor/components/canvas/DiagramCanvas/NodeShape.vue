<template>
  <div :class="shapeClass" class="shape-wrapper">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  node: {
    type: Object,
    required: true
  }
})

const shapeClass = computed(() => {
  switch (props.node.shape) {
    case 'rounded':
      return 'shape-rounded'
    case 'capsule':
      return 'shape-capsule'
    case 'circle':
      return 'shape-circle'
    default:
      return 'shape-box'
  }
})
</script>

<style scoped>
/* كل الأشكال لازم تكون relative */
.shape-wrapper {
  position: relative;
}

/* حجم ثابت + حدود + محاذاة */
.shape-box,
.shape-rounded,
.shape-capsule,
.shape-circle {
  width: 220px;
  height: 120px;

  border: 2px solid #333;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  position: relative; /* مهم جداً */
}

/* شكل مستطيل بحواف ناعمة */
.shape-rounded {
  border-radius: 16px;
  background: #fafafa;
}

/* شكل كبسولة */
.shape-capsule {
  border-radius: 40px;
  padding: 0 20px;
}

/* شكل دائرة */
.shape-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
</style>
