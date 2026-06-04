<script setup lang="ts">
import HomeCards from '@/components/HomeCards.vue'
</script>

<template>
  <div class="w-100 h-100" id="fundo">
    <div class="container pt-3 text-white">
      <div class="col-12 text-center">
        <h1 class="display-3">Boas vindas a Valolant!</h1>
        <h3>Descubra tudo que o jogo tem a oferecer para você</h3>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row bg-valDark">
        <HomeCards></HomeCards>
      </div>
    </div>
  </div>
</template>

<style>
.bg-valDark {
  background-color: #151515;
}
</style>
