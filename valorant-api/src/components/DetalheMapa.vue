<script lang="ts">

export default {
  name: 'DetalheMapa',
  props: {
    detalhes: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imgSel: 'splash'
    }
  },
  methods: {},
  mounted() {
  },
}

</script>

<template>

  <div class="col-4 row d-flex flex-column">
    <div class="col-12 d-flex justify-content-around mt-3 mb-3">
      <button type="button" class="btn btn-sm btn-outline-light " @click="imgSel = 'icon'" v-if="detalhes.displayIcon">Icone</button>
      <button type="button" class="btn btn-sm btn-outline-light " @click="imgSel = 'splash'">Arte</button>
    </div>
    <div class="col-12 d-flex justify-content-center align-items-center mb-3">
      <img :src="detalhes.displayIcon"  :alt="detalhes.displayName" v-if="imgSel == 'icon' && detalhes.displayIcon" class="mw-100 mh-100 object-fit-content">
      <img :src="detalhes.splash"  :alt="detalhes.displayName" v-if="imgSel == 'splash'" class="mw-100 mh-100 object-fit-content">
    </div>
  </div>
  <div class="col-8 row">
    <p class="col-12 pt-3 pb-2 text-center text-white fs-3">Estatísticas de {{ detalhes.displayName }}</p>
    <div class="ps-3">

      <p class="fw-light text-white" v-if="detalhes.coordinates"><span class="fw-bold">Coordenadas: </span>{{ detalhes.coordinates }}</p>
      <div v-if="detalhes.callouts" class="row col-12 ps-2">
        <p class="text-white fw-bold col-6 ps-2">Locais do Mapa</p>
        <div class="col-6 d-flex justify-content-center align-itens-center">
          <button type="button" class="btn btn-sm btn-outline-light border-0" data-bs-toggle="collapse" data-bs-target="#regioesMapa">Exibir</button>
        </div>
        <div class="row col-12 collapse" id="regioesMapa">
          <div class="col-12 row" v-for="regiao in detalhes.callouts" :key="regiao.regionName">
            <p class=" text-white col-12 text-start ps-5" v-if="regiao.regionName"><span class="fw-bold">Nome: </span>{{ regiao.regionName }} || <span class="fw-bold">Região Maior: </span>{{ regiao.superRegionName }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>
