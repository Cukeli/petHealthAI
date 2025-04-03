<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

const navigateToPetProfile = () => {
  router.push('/pet-profile');
};

onMounted(() => {
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-8 animate-bounce-in">
        Welcome to PetHealth AI
      </h1>
      <p class="text-xl text-gray-600 mb-12 animate-fade-in" style="animation-delay: 0.3s">
        Your trusted companion for instant veterinary advice and pet care
      </p>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div class="feature-card card transform hover:scale-105 transition-all duration-300 animate-slide-in bg-gradient-to-br from-white to-blue-50">
          <div class="text-primary-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Instant AI Consultation</h3>
          <p class="text-gray-600">Get immediate insights about your pet's health concerns</p>
        </div>
        
        <div class="feature-card card transform hover:scale-105 transition-all duration-300 animate-slide-in bg-gradient-to-br from-white to-blue-50">
          <div class="text-primary-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Expert Recommendations</h3>
          <p class="text-gray-600">Receive tailored treatment suggestions and care plans</p>
        </div>
        
        <div class="feature-card card transform hover:scale-105 transition-all duration-300 animate-slide-in bg-gradient-to-br from-white to-blue-50">
          <div class="text-primary-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">24/7 Availability</h3>
          <p class="text-gray-600">Access veterinary guidance anytime, anywhere</p>
        </div>
      </div>
      
      <button 
        @click="navigateToPetProfile" 
        class="btn-primary text-lg group relative overflow-hidden"
      >
        <span class="relative z-10">Get Started</span>
        <div class="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
      </button>
    </div>
  </div>
</template>