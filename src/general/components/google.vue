<template>
  <div class="login-box">

    <div class="actions">
      <button class="action-btn editor" @click="goEditor">
        ابدأ مشروع
      </button>

      <button class="action-btn viewer" @click="goViewer">
        استعرض مشروع
      </button>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goEditor() {
  router.push('/main')
}

function goViewer() {
  router.push('/viewer')
}
</script>

<style scoped>
.login-box {
  display: flex;
  justify-content: center;
}

/* جعل الأزرار جنب بعض */
.actions {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

/* شكل الأزرار */
.action-btn {
  padding: 12px 22px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid #000;
  transition: 0.2s;
  width: 160px; /* نفس المقاس */
  text-align: center;
}

/* زر المحرّر */
.action-btn.editor {
  background: #000;
  color: #fff;
}

.action-btn.editor:hover {
  background: #333;
  transform: scale(1.05);
}

/* زر العارض */
.action-btn.viewer {
  background: #fff;
  color: #000;
}

.action-btn.viewer:hover {
  background: #000;
  color: #fff;
  transform: scale(1.05);
}
</style>
