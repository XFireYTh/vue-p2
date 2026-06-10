<script lang="ts">
import DetalheMapa from '@/components/DetalheMapa.vue';
import api from '@/services/api';

export default {
  name: "DetalheMapaView",
  components: {
    DetalheMapa
  },
  data() {
    return {
      mapa: null,
      loaded: false,
    }
  },
  methods: {
    async getMapa() {
      const params = new URLSearchParams(window.location.search)
      const uuid = params.get('uuid')

      if (!uuid) {
        return
      }

      const url = `/maps/${uuid}?language=pt-BR`

      await api.get(url).then(res => {
        this.mapa = res.data.data
        this.loaded = true
      })
    }
  },
  beforeMount() {
    this.getMapa()
  },
  mounted() {

  },
}

</script>

<template>

  <div class="w-100 mt-5 mb-5">
    <div class="container d-flex flex-column align-items-center" v-if="!loaded">
      <p class="col-12 display-2 text-center text-white">Aguarde um momento</p>
      <a href="/mapas" class="btn btn-outline-danger border-0">Voltar</a>
    </div>
    <div v-else class="container d-flex flex-column align-items-center">

      <div class="row col-12">
        <p class="col-md-6 display-4 text-white text-start ps-3">{{ mapa?.displayName }}</p>
        <div class="col-md-4 col-sm-12 d-flex justify-content-end align-items-center">
          <a href="/mapas" class="btn btn-outline-danger border-0">Voltar</a>
        </div>
      </div>

      <div class="row w-100 mt-4 rounded" :style="{backgroundImage: `url(${mapa?.stylizedBackgroundImage})`, backgroundPosition: 'center'}">
        <DetalheMapa v-if="loaded && mapa" :detalhes="mapa" />
      </div>



    </div>
  </div>

</template>
