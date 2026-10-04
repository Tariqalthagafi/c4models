<template>
  <div class="logo-wrapper">
    <!-- الخلفية الهندسية -->
    <svg class="bg-shape" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f46e5" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="90" fill="url(#grad)" opacity="0.15" />
      <rect x="40" y="40" width="120" height="120" rx="20" fill="url(#grad)" opacity="0.12" />
    </svg>

    <!-- النص -->
    <h1 class="logo-text">
      <span class="c4">C4</span>
      <span class="tool">Tool</span>
    </h1>
  </div>
</template>

<style scoped>
.logo-wrapper {
  position: relative;
  width: 260px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* الخلفية */
.bg-shape {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: float 6s ease-in-out infinite;
}

/* حركة خفيفة */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* النص */
.logo-text {
  font-size: 48px;
  font-weight: 800;
  z-index: 2;
  display: flex;
  gap: 8px;
  user-select: none;
}

/* C4 بتدرج لوني */
.c4 {
  background: linear-gradient(90deg, #4f46e5, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Tool بلون داكن */
.tool {
  color: #1f2937;
}
</style>
