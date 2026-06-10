<script lang="ts">
export default {
  name: 'LojaArma',
  props: {
    loja: {
      type: Object,
      required: true
    }
  },
  data() {},
  methods: {},

}
</script>

<template>

  <div class="row col-12 mt-3 ps-1">
    <p v-if="loja.cost" class="text-light fw-light"><span class="fw-bold">Preço: </span>{{ loja.cost }} Créditos</p>
    <p v-if="loja.cost" class="text-light fw-light"><span class="fw-bold">Preço: </span>{{ loja.cost }} Créditos</p>
  </div>

</template>
