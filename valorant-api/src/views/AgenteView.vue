<script lang="ts">
import DetalheAgente from '@/components/DetalheAgente.vue'

export default {
  name: 'ArmasView',
  components: {
    DetalheAgente,
  },
}
</script>

<template>
  <div class="w-100 pt-3 pb-3 d-flex flex-column align-items-center">
    <div class="container">
      <div class="row">
        <p class="display-4 text-white col-lg-8">Detalhes</p>
        <div class="col-lg-4 d-flex justify-content-end align-items-center">
          <a href="/agentes" class="btn btn-outline-light">Voltar</a>
        </div>
      </div>
    </div>
  </div>
  <DetalheAgente />
</template>

<style></style>
