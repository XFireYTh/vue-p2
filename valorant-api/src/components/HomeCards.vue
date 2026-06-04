<script>
import api from '@/services/api'

export default {
  name: 'HomeCards',
  data() {
    return {
      cards: [
        { titulo: 'Agentes', desc: 'Veja informações sobre os agentes do jogo', img: '' },
        { titulo: 'Armas', desc: 'Saiba mais sobre o arsenal distribuído pelo jogo', img: '' },
        { titulo: 'Mapas', desc: 'Descubra os mapas e suas características', img: '' },
      ],
    }
  },
  methods: {
    imgAgentGet(uuid = null) {
      let url = `https://valorant-api.com/v1/agents?language=pt-BR`

      if (uuid != null) {
        url = `https://valorant-api.com/v1/agents/${uuid}?language=pt-BR`
      }

      api.get(url).then((res) => {
        if (res.status == 200) {
          this.cards[0].img = res.data.data.displayIcon
        }
      })
    },

    imgWeaponGet(uuid = null) {
      let url = `https://valorant-api.com/v1/weapons/skins?language=pt-BR`

      if (uuid != null) {
        url = `https://valorant-api.com/v1/weapons/skins/${uuid}?language=pt-BR`
      }

      api.get(url).then((res) => {
        if (res.status == 200) {
          this.cards[1].img = res.data.data.displayIcon
        }
      })
    },

    imgMapGet(uuid = null) {
      let url = `https://valorant-api.com/v1/maps?language=pt-BR`

      if (uuid != null) {
        url = `https://valorant-api.com/v1/maps/${uuid}?language=pt-BR`
      }

      api.get(url).then((res) => {
        if (res.status == 200) {
          this.cards[2].img = res.data.data.splash
        }
      })
    },
  },
  computed: {},
  mounted() {
    this.imgAgentGet('22697a3d-45bf-8dd7-4fec-84a9e28c69d7')
    this.imgWeaponGet('b9ee2457-481c-6776-3f5b-0ca8e8f90c89')
    this.imgMapGet('7eaecc1b-4337-bbf6-6ab9-04b8f06b3319')
  },
}
</script>

<template>
  <div
    class="card border rounded border-dark col-md-3 m-2"
    v-for="(card, index) in cards"
    :key="index"
    style="background-color: #151515"
  >
    <div class="card-header">
      <p class="text-white text-center mt-2 fw-bold">{{ card.titulo }}</p>
    </div>
    <div class="card-img-top w-100 h-50 d-flex justify-content-center align-items-center back-img-val">
      <img :src="card.img" alt="img-card" class="card-img-top h-100" />
    </div>
    <div class="card-body">
      <p class="card-text text-white mt-1">{{ card.desc }}</p>
      <a :href="'/' + card.titulo.toLowerCase()" class="btn btn-outline-light text-center w-100">Ver mais</a>
    </div>
  </div>
</template>

<style>
.back-img-val {
  background: url('@/components/img/VALORANT_Logo.png') no-repeat center center;
  background-size: contain;
}
</style>
