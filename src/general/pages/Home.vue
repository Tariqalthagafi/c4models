<template>
  <div class="home">
  <StageBadge />
    <div class="content">
    
      <!-- الشعار -->
      <Logo />

      <!-- الوصف -->
      <Description />

      <!-- زر الدخول -->
      <GoogleLogin />
    </div>

    <!-- الفوتر -->
    <Footer />

  </div>
</template>

<script setup>
import Logo from '../components/logo.vue'
import Description from '../components/discription.vue'
import GoogleLogin from '../components/google.vue'
import Footer from '../components/footer.vue'
import StageBadge from '../components/StageBadge.vue'
</script>

<style scoped>
/* إجبار الصفحة بالكامل على خط Tajawal */
.home {
  font-family: 'Tajawal', sans-serif;

  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* المحتوى في المنتصف */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 20px;
  text-align: center;
}

/* الفوتر ثابت أسفل الصفحة */
footer {
  flex-shrink: 0;
}
</style>
