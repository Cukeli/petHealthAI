<script setup lang="ts">
import { RouterView } from 'vue-router'
import gsap from 'gsap'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <nav class="bg-white shadow-md backdrop-blur-sm bg-opacity-90 sticky top-0 z-50 transition-all duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link to="/" class="flex items-center group">
              <span class="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
                PetHealth AI
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="page-enter">
      <RouterView v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
    },
    enter(el: HTMLElement, done: () => void) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        onComplete: done
      })
    },
    leave(el: HTMLElement, done: () => void) {
      gsap.to(el, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: done
      })
    }
  }
}
</script>