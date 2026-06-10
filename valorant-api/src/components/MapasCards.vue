<script lang="ts">
import api from '@/services/api';

export default {
  name: 'MapasCards',
  data() {
    return {
      mapas: [],
    }
  },
  methods: {
    async getMapas() {
      const url = "/maps?language=pt-BR"

      await api.get(url).then(res => {
        res.data.data.forEach(mapa => {
          this.mapas.push(mapa)
        })
      })

    }
  },
  mounted() {
    this.getMapas()
  },
}

</script>

<template>

<div class="row d-flex justify-content-center">
  <div class="col-lg-3 col-md-5 card bg-transparent m-2" v-for="mapa in mapas" :key="mapa.uuid">
    <a :href="'/detalheMapa?uuid=' + mapa.uuid" class="w-100">
      <img :src="mapa.splash" alt="" class="mw-100 object-fit-content card-img">
      <div class="card-img-overlay w-100 h-100">
        <p class="text-white fw-bolder text-center mt-1">{{ mapa.displayName }}</p>
      </div>
    </a>


  </div>
</div>

</template>
