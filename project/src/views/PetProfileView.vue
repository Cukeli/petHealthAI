<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const petName = ref('');
const petType = ref('');
const petAge = ref('');
const petBreed = ref('');

const savePetProfile = () => {
  // In a real app, we would save this to a backend
  localStorage.setItem('petProfile', JSON.stringify({
    name: petName.value,
    type: petType.value,
    age: petAge.value,
    breed: petBreed.value,
  }));
  
  router.push('/symptoms');
};
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Create Pet Profile</h1>
    
    <div class="card">
      <form @submit.prevent="savePetProfile" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Pet Name
          </label>
          <input
            v-model="petName"
            type="text"
            required
            class="input-field"
            placeholder="Enter pet's name"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Pet Type
          </label>
          <select v-model="petType" required class="input-field">
            <option value="">Select pet type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <input
            v-model="petAge"
            type="text"
            required
            class="input-field"
            placeholder="Enter pet's age"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Breed
          </label>
          <input
            v-model="petBreed"
            type="text"
            class="input-field"
            placeholder="Enter pet's breed (optional)"
          />
        </div>
        
        <button type="submit" class="btn-primary w-full">
          Continue to Symptoms
        </button>
      </form>
    </div>
  </div>
</template>