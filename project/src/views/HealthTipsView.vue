<script setup lang="ts">
const healthTips = [
  {
    title: 'Maintaining a Healthy Diet',
    content: 'Learn about balanced nutrition for your pet and how to avoid common dietary mistakes.',
  },
  {
    title: 'Exercise Guidelines',
    content: 'Discover the right amount and type of exercise for your pet\'s breed and age.',
  },
  {
    title: 'Preventive Care',
    content: 'Regular check-ups and vaccinations are key to keeping your pet healthy.',
  },
  {
    title: 'Mental Stimulation',
    content: 'Keep your pet mentally active with toys and training exercises.',
  },
];
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Pet Health Tips & Resources</h1>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div v-for="(tip, index) in healthTips" :key="index" class="card">
        <h3 class="text-lg font-semibold mb-2">{{ tip.title }}</h3>
        <p class="text-gray-600">{{ tip.content }}</p>
      </div>
    </div>
  </div>
</template>