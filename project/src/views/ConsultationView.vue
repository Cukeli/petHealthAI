<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(true);
const analysis = ref({
  condition: '',
  urgency: '',
  recommendation: '',
});

onMounted(() => {
  // Simulate AI analysis
  setTimeout(() => {
    const symptoms = JSON.parse(localStorage.getItem('symptoms') || '{}');
    
    // In a real app, this would come from an AI service
    analysis.value = {
      condition: 'Possible mild stomach upset',
      urgency: 'Low - Can be managed at home with proper care',
      recommendation: 'Based on the symptoms described, your pet may be experiencing a mild digestive issue.',
    };
    
    loading.value = false;
  }, 2000);
});

const viewTreatment = () => {
  router.push('/treatment');
};
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">AI Consultation Results</h1>
    
    <div v-if="loading" class="card text-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Analyzing symptoms...</p>
    </div>
    
    <div v-else class="card space-y-6">
      <div>
        <h3 class="text-lg font-semibold mb-2">Potential Condition</h3>
        <p class="text-gray-600">{{ analysis.condition }}</p>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Urgency Level</h3>
        <p class="text-gray-600">{{ analysis.urgency }}</p>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">AI Recommendation</h3>
        <p class="text-gray-600">{{ analysis.recommendation }}</p>
      </div>
      
      <button @click="viewTreatment" class="btn-primary w-full">
        View Treatment Plan
      </button>
    </div>
  </div>
</template>