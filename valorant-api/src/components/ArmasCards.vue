<script lang="ts">
import api from '@/services/api'

export default {
  name: 'ArmasCards',
  data() {
    return {
      armas: [],
    }
  },
  methods: {
    async getInto() {
      const url = '/weapons?language=pt-BR'
      await api.get(url).then((res) => {
        const guns = res.data.data
        console.log(guns)
        guns.forEach((gun) => {
          this.armas.push({
            id: gun.uuid,
            nome: gun.displayName,
            disp: gun.displayIcon,
          })
        })
      })
    },
  },
  beforeMount() {
    this.getInto()
  },
}
</script>

<template>
  <div class="w-100 d-flex justify-content-center mt-3 mb-3">
    <div class="container">
      <div class="row d-flex justify-content-center gap-2">
        <a
          :href="'/detalhearma?id=' + arma.id"
          class="card col-md-4 col-sm-12 col-lg-2 bg-dark btn btn-outline-light"
          v-for="(arma, index) in armas"
          :key="index"
        >
          <img :src="arma.disp" :alt="arma.nome + 'Foto'" class="card-img" />
          <div class="card-img-overlay d-flex align-items-center justify-content-center">
            <p class="card-title text-white text-center">{{ arma.nome }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
