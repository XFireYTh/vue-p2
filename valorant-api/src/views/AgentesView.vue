<script lang="ts">
import AgentesCards from '@/components/AgentesCards.vue'

export default {
  name: 'AgentesView',
  components: {
    AgentesCards,
  },
}
</script>

<template>
  <div class="w-100 d-flex flex-column align-items-center justify-content-center" id="fundo">
    <div class="text-center container mt-2">
      <h1 class="display-3 text-white">Agentes</h1>
      <p class="text-white pt-3 fs-5">Veja tudo sobre os agentes do Valorant</p>
    </div>

    <AgentesCards />
  </div>
</template>

<style></style>
