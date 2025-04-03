<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const symptoms = ref('');
const duration = ref('');
const severity = ref('mild');

const submitSymptoms = () => {
  // In a real app, we would send this to an AI service
  localStorage.setItem('symptoms', JSON.stringify({
    description: symptoms.value,
    duration: duration.value,
    severity: severity.value,
  }));
  
  router.push('/consultation');
};
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Describe Symptoms</h1>
    
    <div class="card">
      <form @submit.prevent="submitSymptoms" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            What symptoms is your pet experiencing?
          </label>
          <textarea
            v-model="symptoms"
            required
            rows="4"
            class="input-field"
            placeholder="Describe the symptoms in detail..."
          ></textarea>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            How long has this been occurring?
          </label>
          <input
            v-model="duration"
            type="text"
            required
            class="input-field"
            placeholder="e.g., 2 days, 1 week"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Severity
          </label>
          <select v-model="severity" required class="input-field">
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
        </div>
        
        <button type="submit" class="btn-primary w-full">
          Get AI Consultation
        </button>
      </form>
    </div>
  </div>
</template>