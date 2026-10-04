import Person from "./library/Person.vue"
import System from "./library/System.vue"
import ExternalSystem from "./library/ExternalSystem.vue"
import Container from "./library/Container.vue"
import Component from "./library/Component.vue"
import Database from "./library/Database.vue"
import Relationship from "./library/Relationship.vue"

export const ShapesLibrary = {

  person: {
    type: "person",
    label: "Person",
    width: 120,
    height: 120,
    component: Person
  },

  system: {
    type: "system",
    label: "System",
    width: 180,
    height: 100,
    component: System
  },

  externalSystem: {
    type: "externalSystem",
    label: "External System",
    width: 180,
    height: 100,
    component: ExternalSystem
  },

  container: {
    type: "container",
    label: "Container",
    width: 260,
    height: 140,
    component: Container
  },

  component: {
    type: "component",
    label: "Component",
    width: 200,
    height: 110,
    component: Component
  },

  database: {
    type: "database",
    label: "Database",
    width: 260,
    height: 160,
    component: Database
  },

  relationship: {
    type: "relationship",
    label: "Relationship",
    width: 300,
    height: 50,
    component: Relationship
  }

}
