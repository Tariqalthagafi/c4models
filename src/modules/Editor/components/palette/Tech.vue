<template>
  <div class="tech-sections">
    <div v-for="section in sections" :key="section.name" class="section">

      <!-- عنوان القسم -->
      <div class="section-header" @click="toggle(section.name)">
        <span class="section-title">{{ section.label }}</span>
        <span class="arrow" :class="{ open: isOpen(section.name) }">▾</span>
      </div>

      <!-- التقنيات -->
      <div class="section-body">

        <!-- الأيقونات الأساسية (أول 4) -->
        <div class="tech-grid">
          <div
            v-for="tech in section.items.slice(0, 2)"
            :key="tech"
            class="tech-item"
            draggable="true"
            @dragstart="dragTech(section.name, tech)"
          >
            <img class="tech-icon" :src="`/techicons/${section.name}/${tech}.svg`" />
            <span class="tech-name">{{ tech }}</span>
          </div>
        </div>

        <!-- بقية الأيقونات عند التوسيع -->
        <div v-if="isOpen(section.name)" class="tech-grid">
          <div
            v-for="tech in section.items.slice(2)"
            :key="tech"
            class="tech-item"
            draggable="true"
            @dragstart="dragTech(section.name, tech)"
          >
            <img class="tech-icon" :src="`/techicons/${section.name}/${tech}.svg`" />
            <span class="tech-name">{{ tech }}</span>
          </div>
        </div>

        <!-- زر عرض المزيد -->
        <div
          v-if="section.items.length > 4"
          class="more-btn"
          @click="toggle(section.name)"
        >
          {{ isOpen(section.name) ? "إخفاء" : "عرض المزيد ▾" }}
        </div>

      </div>

    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'

const sections = [
  {
    name: 'browser',
    label: 'Browser',
    items: ['Chrome', 'Firefox', 'Edge', 'AppleSafari', 'Opera'],
  },

  {
    name: 'Compute',
    label: 'Compute',
    items: ['NodeJS', 'Golang', 'Python', 'Docker', 'Kubernetes'],
  },

  { name: 'datatype', label: 'Data Types', items: ['JSON', 'XML', 'YAML', 'TypeScript'] },

  { name: 'git', label: 'Git', items: ['GitHub', 'GitLab', 'BitBucket', 'Git'] },

  {
    name: 'Storage',
    label: 'Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
  },

  { name: 'Messaging', label: 'Messaging', items: ['Kafka', 'RabbitMQ'] },

  { name: 'Networking', label: 'Networking', items: ['Nginx', 'Traefik'] },

  { name: 'Security', label: 'Security', items: ['Okta'] },

  {
    name: 'OperatingSystems',
    label: 'Operating Systems',
    items: ['Linux', 'Ubuntu', 'Debian', 'WindowsServer', 'CentOS'],
  },

  {
    name: 'UILibraries',
    label: 'UI Libraries',
    items: ['Tailwind', 'Bootstrap', 'MaterialUI', 'AntDesign'],
  },

  {
    name: 'WebFeFrameworks',
    label: 'Frontend Frameworks',
    items: ['React', 'Vue', 'Angular', 'Svelte', 'SolidJS'],
  },

  { name: 'CloudOS', label: 'Cloud OS', items: ['GoogleCloud', 'Azure'] },

  { name: 'hosting', label: 'Hosting', items: ['DigitalOcean', 'Vercel', 'AWS'] },

  {
    name: 'WebBeFrameworks',
    label: 'Backend Frameworks',
    items: ['Django', 'Laravel', 'Nestjs', 'Express', 'NETcore'],
  },
]

const openSections = ref([])

function toggle(name) {
  if (openSections.value.includes(name)) {
    openSections.value = openSections.value.filter(s => s !== name)
  } else {
    openSections.value.push(name)
  }
}

function isOpen(name) {
  return openSections.value.includes(name)
}


/* السحب يرسل النص + الأيقونة */
function dragTech(section, tech) {
  const iconPath = `/techicons/${section.name}/${tech}.svg`

  event.dataTransfer.setData("tech", tech)
  event.dataTransfer.setData("tech-icon", iconPath)
}
</script>

<style scoped>
/* الحاوية العامة */
.tech-sections {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* عنوان القسم */
.section-header {
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s;
}

.section-header:hover {
  background: #e9e9e9;
}

.arrow {
  font-size: 12px;
  transition: transform 0.2s;
}

.arrow.open {
  transform: rotate(180deg);
}

/* شبكة الأيقونات */
.section-body {
  padding: 10px 6px;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

/* عنصر التقنية */
.tech-item {
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: grab;
  user-select: none;
  transition: transform 0.15s;
}

.tech-item:hover {
  transform: scale(1.12);
}

.tech-icon {
  width: 34px;
  height: 34px;
}

.tech-name {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #333;
}

/* زر عرض المزيد */
.more-btn {
  margin-top: 8px;
  font-size: 12px;
  cursor: pointer;
  color: #666;
  user-select: none;
  text-align: left;
}

.more-btn:hover {
  color: #000;
  text-decoration: underline;
}

</style>
