import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PetProfileView from '../views/PetProfileView.vue'
import SymptomInputView from '../views/SymptomInputView.vue'
import ConsultationView from '../views/ConsultationView.vue'
import TreatmentView from '../views/TreatmentView.vue'
import HealthTipsView from '../views/HealthTipsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pet-profile',
      name: 'pet-profile',
      component: PetProfileView
    },
    {
      path: '/symptoms',
      name: 'symptoms',
      component: SymptomInputView
    },
    {
      path: '/consultation',
      name: 'consultation',
      component: ConsultationView
    },
    {
      path: '/treatment',
      name: 'treatment',
      component: TreatmentView
    },
    {
      path: '/health-tips',
      name: 'health-tips',
      component: HealthTipsView
    }
  ]
})

export default router