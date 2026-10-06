<template>
  <div class="beta-badge">
    <span class="beta-word">Beta</span>
    — نسخة تجريبية قد تتغير بعض الميزات أثناء التطوير.
  </div>
</template>

<script setup>
</script>

<style scoped>
.beta-badge {
  background: #fdf7e3;
  color: #6b5b00;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border: 1px solid #f0e2b8;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 6px;
  align-items: center;
}

/* كلمة Beta بشكل ذهبي واضح */
.beta-word {
  font-weight: 700;
  color: #d4a017; /* ذهبي */
}
</style>
