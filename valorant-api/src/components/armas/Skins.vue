<script lang="ts">
import api from '@/services/api';

export default {
  name: 'SkinsArma',
  props: {
    skins: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      skinSelecionada: '',
      dsSel: {},
    }
  },
  methods: {
    async getSkinSelecionada() {
      if (this.skinSelecionada == '') {return this.dsSel = {}}

      const url = `/weapons/skins/${this.skinSelecionada}?language=pt-BR`

      await api.get(url).then(res => {
        this.dsSel = res.data.data
      })
    }
  },
}
</script>

<template>

  <div class="row mt-3">
    <div class="col-12">
      <select name="skin" class="form-select bg-dark text-white" id="skin" v-model="skinSelecionada" @change="getSkinSelecionada()">
        <option value="" selected>Selecione uma skin</option>
        <option v-for="(skin, index) in skins" :value="skin.uuid" class="text-white" :key="skin.uuid">{{ skin.displayName }}</option>
      </select>
    </div>
    <div v-if='dsSel' class="row mt-3">
      <div class="col-12">
        <h4 class="col-12 text-white text-center">{{ dsSel.displayName }}</h4>
      </div>
      <img :src="dsSel.displayIcon" :alt="dsSel.displayName" class="mw-100 mh-100 object-fit-contain mt-3">
    </div>
  </div>

</template>