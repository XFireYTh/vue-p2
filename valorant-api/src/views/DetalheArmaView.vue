<script lang="ts">
import DetalheArmas from '@/components/DetalheArmas.vue'
import api from '@/services/api'

export default {
  name: 'DetalheArmaView',
  data() {
    return {
      nomeArma: '',
    }
  },
  components: {
    DetalheArmas,
  },
  methods: {
    async nomeGet() {
      const params = new URLSearchParams(window.location.search)
      const uuid = params.get('id')
      await api.get(`/weapons/${uuid}?language=pt-BR`).then((res) => {
        this.nomeArma = res.data.data.displayName
      })
    },
  },
  beforeMount() {
    this.nomeGet()
  },
}
</script>

<template>
  <div class="w-100">
    <div class="container d-flex justify-content-center mt-3">
      <p class="display-2 text-white" v-if="nomeArma">{{ nomeArma }}</p>
      <p class="display-2 text-white" v-else>Detalhe Arma</p>
    </div>
  </div>
  <DetalheArmas />
</template>

<style></style>
