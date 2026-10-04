<template>
  <div class="graph-placeholder">
    <h2>🕸️ وضع الرسم البياني</h2>
    <p>هذا النمط غير جاهز بعد وسيتم تطويره قريبًا.</p>

    <p class="hint">
      سيتم إضافة:
      <br>• رسم النودات باستخدام D3
      <br>• رسم العلاقات كخطوط SVG
      <br>• دعم Zoom + Pan
      <br>• دعم Force Layout
    </p>
  </div>
</template>

<script setup lang="ts">
// لا يوجد منطق الآن — فقط رسالة
</script>

<style scoped>
.graph-placeholder {
  width: 90%;
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  text-align: center;
  background: #fff;
  border: 2px dashed #aaa;
  border-radius: 14px;
}

.graph-placeholder h2 {
  font-size: 26px;
  margin-bottom: 10px;
}

.graph-placeholder p {
  font-size: 18px;
  color: #444;
}

.hint {
  margin-top: 20px;
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}
</style>
