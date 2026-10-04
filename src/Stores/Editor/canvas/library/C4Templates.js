// src/workspace/library/C4Templates.js

// -----------------------------
// SYSTEM
// -----------------------------
export const SystemSVG = {
  name: "SystemSVG",
  props: ["node"],
  template: `
    <svg :width="node.width" :height="node.height">
      <rect
        x="10"
        y="10"
        :width="node.width - 20"
        :height="node.height - 20"
        rx="10"
        ry="10"
        stroke="#4a90e2"
        stroke-width="3"
        fill="none"
      />
      <text
        :x="node.width / 2"
        y="45"
        text-anchor="middle"
        font-size="18"
        font-family="Arial"
        fill="#000"
      >
        {{ node.name }}
      </text>
    </svg>
  `
}

// -----------------------------
// PERSON
// -----------------------------
export const PersonSVG = {
  name: "PersonSVG",
  props: ["node"],
  template: `
    <svg :width="node.width" :height="node.height">
      <circle
        :cx="node.width / 2"
        cy="35"
        r="25"
        stroke="#333"
        stroke-width="3"
        fill="none"
      />
      <rect
        :x="node.width / 2 - 25"
        y="70"
        width="50"
        height="60"
        stroke="#333"
        stroke-width="3"
        fill="none"
      />
      <text
        :x="node.width / 2"
        :y="node.height - 15"
        text-anchor="middle"
        font-size="16"
        fill="#000"
      >
        {{ node.name }}
      </text>
    </svg>
  `
}

// -----------------------------
// DATABASE
// -----------------------------
export const DatabaseSVG = {
  name: "DatabaseSVG",
  props: ["node"],
  template: `
    <svg :width="node.width" :height="node.height">
      <ellipse
        :cx="node.width / 2"
        cy="25"
        :rx="node.width / 2 - 10"
        ry="20"
        stroke="#8b0000"
        stroke-width="3"
        fill="none"
      />
      <rect
        x="10"
        y="25"
        :width="node.width - 20"
        :height="node.height - 45"
        stroke="#8b0000"
        stroke-width="3"
        fill="none"
      />
      <ellipse
        :cx="node.width / 2"
        :cy="node.height - 20"
        :rx="node.width / 2 - 10"
        ry="20"
        stroke="#8b0000"
        stroke-width="3"
        fill="none"
      />
      <text
        :x="node.width / 2"
        :y="node.height - 5"
        text-anchor="middle"
        font-size="16"
        fill="#8b0000"
      >
        {{ node.name }}
      </text>
    </svg>
  `
}

// -----------------------------
// EXPORT ALL
// -----------------------------
export const C4Templates = {
  system: SystemSVG,
  person: PersonSVG,
  database: DatabaseSVG
  // لاحقًا نضيف:
  // container
  // component
  // browser
  // mobile
  // cloud
  // server
  // folder
  // funnel
  // scope
  // node
}
