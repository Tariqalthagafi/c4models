<template>
  <div class="welcome-page">
    <h2 class="title">مرحبًا بك 👋</h2>

    <h3 class="subtitle">دليل الاستخدام</h3>

    <ul class="list">
      <li>ابدأ من لوحة العمل Workspace لإنشاء نموذج جديد.</li>
      <li>
        استخدم قائمة الأدوات لسحب العناصر (Systems – Containers – Components – Relations)
        إلى مساحة الرسم.
      </li>
      <li>اضغط على أي عنصر لتعديل خصائصه مثل الاسم، التقنية، الحجم، واللون.</li>
      <li>لإنشاء علاقة بين عنصرين، اختر أداة العلاقة ثم اسحب من العنصر الأول إلى الثاني.</li>
      <li>استخدم التكبير/التصغير (Zoom) للتنقل داخل النموذج بسهولة.</li>
      <li>يمكنك تنظيم النموذج داخل مستويات (Scopes) لعرض التفاصيل أو الرجوع للمستوى الأعلى.</li>
      <li>احفظ مشروعك محليًا داخل المتصفح، ويمكنك لاحقًا ربطه بالسحابة عبر خدمات Enterprise.</li>
    </ul>
  </div>
</template>

<style scoped>
.welcome-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* المحتوى في النص */
  direction: rtl;
  text-align: right;
  font-family: 'Tajawal', sans-serif;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
}

.list {
  line-height: 1.8;
  color: #555;
  max-width: 650px; /* نفس عرض البطاقة سابقًا */
}
</style>
