<script>
import ArmasCards from '@/components/ArmasCards.vue'

export default {
  name: 'ArmasView',
  components: {
    ArmasCards,
  },
}
</script>

<template>
  <div class="w-100">
    <div class="container d-flex justify-content-center mt-3">
      <p class="display-2 text-white">Armas</p>
    </div>
  </div>
  <ArmasCards />
</template>

<style></style>
