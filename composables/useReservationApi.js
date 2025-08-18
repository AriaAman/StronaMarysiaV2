// Composable pour la gestion de l'API de réservation
export const useReservationApi = () => {
  const apiBaseUrl = 'https://api.felg.app/v1'
  
  // Headers par défaut pour l'API
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // Ajoutez votre clé API ici si nécessaire
    // 'Authorization': 'Bearer YOUR_API_KEY'
  }

  // Fonction pour faire des appels API avec gestion d'erreur
  const apiCall = async (endpoint, options = {}) => {
    try {
      const response = await $fetch(`${apiBaseUrl}${endpoint}`, {
        headers: { ...defaultHeaders, ...options.headers },
        ...options
      })
      return { success: true, data: response }
    } catch (error) {
      console.error('API Error:', error)
      return { 
        success: false, 
        error: error.message || 'Une erreur est survenue',
        details: error
      }
    }
  }

  // Récupérer les dates disponibles
  const getAvailableDates = async () => {
    // Pour le moment, on simule des données
    // En production, remplacez par un vrai appel API
    const mockDates = generateMockAvailableDates()
    return mockDates

    // Code pour l'API réelle (à décommenter et adapter)
    /*
    const result = await apiCall('/externalscalendars')
    if (result.success) {
      return result.data.map(item => ({
        date: item.date,
        available: item.available,
        slots: item.slots
      }))
    }
    throw new Error(result.error)
    */
  }

  // Récupérer les créneaux disponibles pour une date donnée
  const getAvailableTimeSlots = async (date, extCalId = null) => {
    // Simulation de données pour le développement
    const mockSlots = generateMockTimeSlots(date)
    return mockSlots

    // Code pour l'API réelle (à décommenter et adapter)
    /*
    const endpoint = extCalId 
      ? `/externalscalendars/${extCalId}/freehours`
      : '/externalscalendars/freehours'
    
    const result = await apiCall(endpoint, {
      query: { date }
    })
    
    if (result.success) {
      return result.data.map(slot => ({
        id: slot.id,
        time: slot.time,
        duration: slot.duration,
        available: slot.available,
        doctor: slot.doctor,
        type: slot.type
      }))
    }
    throw new Error(result.error)
    */
  }

  // Créer un nouveau rendez-vous
  const createAppointment = async (reservationData) => {
    // Simulation pour le développement
    console.log('Création du rendez-vous:', reservationData)
    
    // Simulation d'un délai de traitement
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulation d'une réponse réussie
    return {
      success: true,
      appointmentId: `RDV-${Date.now()}`,
      message: 'Rendez-vous créé avec succès'
    }

    // Code pour l'API réelle (à décommenter et adapter)
    /*
    const appointmentPayload = {
      date: reservationData.date,
      time: reservationData.timeSlot.time,
      duration: reservationData.timeSlot.duration || 30,
      patient: {
        firstName: reservationData.patient.firstName,
        lastName: reservationData.patient.lastName,
        email: reservationData.patient.email,
        phone: reservationData.patient.phone,
        dateOfBirth: reservationData.patient.dateOfBirth,
        isFirstVisit: reservationData.patient.isFirstVisit,
        reason: reservationData.patient.reason,
        notes: reservationData.patient.notes,
        allergies: reservationData.patient.allergies
      }
    }

    const result = await apiCall('/externalscalendars/{extCalId}', {
      method: 'POST',
      body: appointmentPayload
    })

    if (result.success) {
      return {
        success: true,
        appointmentId: result.data.id,
        message: 'Rendez-vous créé avec succès'
      }
    }
    
    return {
      success: false,
      error: result.error
    }
    */
  }

  // Récupérer les informations sur les bureaux/cabinets
  const getOffices = async () => {
    const result = await apiCall('/offices')
    return result
  }

  // Récupérer les types de visites disponibles
  const getVisitTypes = async () => {
    const result = await apiCall('/typesOfVisits')
    return result
  }

  // Récupérer la liste des médecins/workers
  const getWorkers = async () => {
    const result = await apiCall('/workers')
    return result
  }

  return {
    getAvailableDates,
    getAvailableTimeSlots,
    createAppointment,
    getOffices,
    getVisitTypes,
    getWorkers
  }
}

// Fonctions utilitaires pour générer des données de test
const generateMockAvailableDates = () => {
  const dates = []
  const today = new Date()
  
  // Générer 30 jours à partir d'aujourd'hui
  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    // Exclure les dimanches (jour 0)
    const isWeekend = date.getDay() === 0
    
    // Disponibilité garantie pour les jours de semaine, aléatoire pour samedi
    const available = !isWeekend && (date.getDay() !== 6 || Math.random() > 0.5)
    
    dates.push({
      date: date.toISOString().split('T')[0],
      available,
      dayOfWeek: date.getDay()
    })
  }
  
  return dates
}

const generateMockTimeSlots = (date) => {
  const slots = []
  const workingHours = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ]
  
  workingHours.forEach((time, index) => {
    // Garantir qu'au moins 60% des créneaux sont disponibles
    const available = Math.random() > 0.3
    
    slots.push({
      id: `slot-${date}-${time}`,
      time,
      duration: '30 min',
      available,
      doctor: index % 2 === 0 ? 'Dr. Pietruszczak' : 'Dr. Kowalski',
      type: 'Konsultacja'
    })
  })
  
  // S'assurer qu'il y a au moins 3 créneaux disponibles
  const availableSlots = slots.filter(slot => slot.available)
  if (availableSlots.length < 3) {
    // Forcer les 3 premiers créneaux à être disponibles
    for (let i = 0; i < Math.min(3, slots.length); i++) {
      slots[i].available = true
    }
  }
  
  return slots
}
