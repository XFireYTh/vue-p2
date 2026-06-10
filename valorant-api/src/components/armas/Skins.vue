<script lang="ts">
import api from '@/services/api'

export default {
  name: 'SkinsArma',
  props: {
    skins: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      skinSelecionada: '',
      dsSel: {},
      skinExibida: ''
    }
  },
  methods: {
    async getSkinSelecionada() {
      if (this.skinSelecionada == '') {
        return (this.dsSel = {})
      }

      const url = `/weapons/skins/${this.skinSelecionada}?language=pt-BR`

      await api.get(url).then((res) => {
        this.dsSel = res.data.data
        this.skinExibida = res.data.data.displayIcon
      })
    },
  },
}
</script>

<template>
  <div class="row mt-3">
    <div class="col-12">
      <select
        name="skin"
        class="form-select bg-dark text-white"
        id="skin"
        v-model="skinSelecionada"
        @change="getSkinSelecionada()"
      >
        <option value="" selected>Selecione uma skin</option>
        <option
          v-for="(skin, index) in skins"
          :value="skin.uuid"
          class="text-white"
          :key="skin.uuid"
        >
          {{ skin.displayName }}
        </option>
      </select>
    </div>
    <div v-if="dsSel" class="row mt-3" :style="{backgroundImage: dsSel.wallpaper}">
      <div class="col-12 mt-3 mb-3">
        <h4 class="col-12 text-white text-center">{{ dsSel.displayName }}</h4>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <img
        :src="skinExibida"
        :alt="dsSel.displayName"
        class="w-50 object-fit-contain mt-3 mb-3"
      />
      </div>

      <div class="row d-flex justify-content-around mt-3">
        <button v-if="dsSel.chromas" v-for="variante in dsSel.chromas" :key="variante.uuid" @click="skinExibida = variante.displayIcon || dsSel.displayIcon" type="button" class="btn col-2 h-75"><img v-if="variante.swatch" :src="variante.swatch" alt="displayName" class="mh-100 mw-100 object-fit-content rounded"></button>
      </div>
    </div>
  </div>
</template>
