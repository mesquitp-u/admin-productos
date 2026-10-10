const { defineConfig } = require("cypress")
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    video: true, // graba video de la corrida ========== EJERCICIO 1
    setupNodeEvents(on, config) {},
  },
})