<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const treatments = ref([
  {
    title: 'Dietary Modification',
    description: 'Temporarily switch to a bland diet (boiled chicken and rice)',
    timing: 'Next 2-3 days',
  },
  {
    title: 'Hydration',
    description: 'Ensure fresh water is always available',
    timing: 'Continuous',
  },
  {
    title: 'Rest',
    description: 'Limit physical activity',
    timing: '24-48 hours',
  },
]);

const reminders = ref([
  {
    time: '8:00 AM',
    task: 'Morning meal (bland diet)',
  },
  {
    time: '2:00 PM',
    task: 'Check water bowl',
  },
  {
    time: '8:00 PM',
    task: 'Evening meal (bland diet)',
  },
]);

const viewHealthTips = () => {
  router.push('/health-tips');
};
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Treatment Plan</h1>
    
    <div class="space-y-8">
      <div class="card">
        <h2 class="text-xl font-semibold mb-4">Recommended Treatment Steps</h2>
        <div class="space-y-4">
          <div v-for="(treatment, index) in treatments" :key="index" class="border-b last:border-b-0 pb-4 last:pb-0">
            <h3 class="font-medium text-gray-900">{{ treatment.title }}</h3>
            <p class="text-gray-600">{{ treatment.description }}</p>
            <p class="text-sm text-gray-500 mt-1">Timing: {{ treatment.timing }}</p>
          </div>
        </div>
      </div>
      
      <div class="card">
        <h2 class="text-xl font-semibold mb-4">Care Reminders</h2>
        <div class="space-y-4">
          <div v-for="(reminder, index) in reminders" :key="index" class="flex justify-between items-center">
            <span class="font-medium">{{ reminder.time }}</span>
            <span class="text-gray-600">{{ reminder.task }}</span>
          </div>
        </div>
      </div>
      
      <button @click="viewHealthTips" class="btn-primary w-full">
        View Health Tips
      </button>
    </div>
  </div>
</template>