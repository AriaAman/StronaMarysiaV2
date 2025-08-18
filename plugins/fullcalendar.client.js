// Plugin pour configurer FullCalendar
export default defineNuxtPlugin(() => {
  // Configuration globale de FullCalendar si nécessaire
  if (process.client) {
    // Code côté client uniquement
    console.log('FullCalendar plugin loaded')
  }
})
