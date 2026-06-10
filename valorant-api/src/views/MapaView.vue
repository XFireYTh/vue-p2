<script lang="ts">
import MapasCards from '@/components/MapasCards.vue';

export default {
  name: 'MapaView',
  components: {
    MapasCards
  },
}
</script>

<template>
  <div class="w-100">

    <div class="container mt-2 mb-5">
      <div class="row">
        <p class="display-3 mt-5 col-12 text-center text-light">Mapas</p>
        <div class="w-100 d-flex justify-content-center mt-2">
          <a href="/" class="btn btn-outline-light">Voltar</a>
        </div>
        <div class="col-12 mt-5">
          <MapasCards />
        </div>
      </div>

    </div>

  </div>
</template>

<style></style>
