<script lang="ts">
export default {
  name: 'StatusArma',
  data() {},
  props: {
    dadosArma: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatStr(str: string) {
      let ddc = 0
      let c = 0
      let formated = ''
      for (c; ddc < 2; c++) {
        if (str[c] == ':') {
          ddc++
          continue
        }
      }
      for (c; c < str.length; c++) {
        formated += str[c]
      }
      return formated
    },
  },
}
</script>

<template>
  <div class="ms-2 me-2">
    <p v-if="dadosArma.fireRate" class="text-white fw-light">
      <span class="fw-bold">Cadência de tiro:</span> {{ dadosArma.fireRate }} Tiros por Segundo
    </p>
    <p v-if="dadosArma.magazineSize" class="text-white fw-light">
      <span class="fw-bold">Capacidade do pente:</span> {{ dadosArma.magazineSize }} Balas
    </p>
    <p v-if="dadosArma.runSpeedMultiplier" class="text-white fw-light">
      <span class="fw-bold">Multiplicador de Velocidade de Corrida:</span>
      {{ dadosArma.runSpeedMultiplier }} x
    </p>
    <p v-if="dadosArma.equipTimeSeconds" class="text-white fw-light">
      <span class="fw-bold">Tempo para Equipar em Segundos:</span>
      {{ dadosArma.equipTimeSeconds }} segundos
    </p>
    <p v-if="dadosArma.reloadTimeSeconds" class="text-white fw-light">
      <span class="fw-bold">Tempo de Recarga:</span>
      {{ dadosArma.reloadTimeSeconds }} segundos
    </p>
    <p v-if="dadosArma.firstBulletAccuracy" class="text-white fw-light">
      <span class="fw-bold">Precisão do primeiro tiro:</span>
      {{ dadosArma.firstBulletAccuracy }}°
    </p>
    <p v-if="dadosArma.shotgunPelletCount" class="text-white fw-light">
      <span class="fw-bold">Projéteis por disparo:</span>
      {{ dadosArma.shotgunPelletCount }}
    </p>

    <p v-if="dadosArma.wallPenetration" class="text-white fw-light">
      <span class="fw-bold">Penetração de paredes:</span>
      {{ formatStr(dadosArma.wallPenetration) }}
    </p>

    <p v-if="dadosArma.feature" class="text-white fw-light">
      <span class="fw-bold">Característica Especial:</span> {{ formatStr(dadosArma.feature) }}
    </p>

    <p v-if="dadosArma.fireMode" class="text-white fw-light">
      <span class="fw-bold">Modo de Tiro:</span> {{ formatStr(dadosArma.fireMode) }}
    </p>

    <p v-if="dadosArma.altFireType" class="text-white fw-light">
      <span class="fw-bold">Modo de tiro alternativo (MB2):</span>
      {{ formatStr(dadosArma.altFireType) }}
    </p>

    <div v-if="dadosArma.adsStats" class="row w-100">
      <div class="col-12 row d-flex align-items-center justify-content-between">
        <p class="text-white fw-bold col-8">Status da Mira(ADS):</p>
        <div class="col-4 d-flex justify-content-center align-items-center">
          <button
            type="button"
            class="btn btn-outline-light btn-sm border-0 "
            data-bs-toggle="collapse"
            data-bs-target="#detalhesADS"
          >
            Exibir
          </button>
        </div>

      </div>
      <div class="ps-4 pb-2 collapse" id="detalhesADS">
        <p class="text-white fw-light">
          <span class="fw-bold">Zoom:</span> {{ dadosArma.adsStats.zoomMultiplier }} x
        </p>
        <p class="text-white fw-light">
          <span class="fw-bold">Taxa de tiro:</span> {{ dadosArma.adsStats.fireRate }} disparos por
          segundo
        </p>
        <p class="text-white fw-light">
          <span class="fw-bold">Multiplicador de Velocidade de Corrida:</span>
          {{ dadosArma.adsStats.runSpeedMultiplier }} x
        </p>
        <p class="text-white fw-light">
          <span class="fw-bold">Disparos por Rajada:</span> {{ dadosArma.adsStats.burstCount }}
        </p>
        <p class="text-white fw-light">
          <span class="fw-bold">Precisão do Primeiro Tiro:</span>
          {{ dadosArma.adsStats.firstBulletAccuracy }}°
        </p>
      </div>
    </div>

    <div v-if="dadosArma.altShotgunStats" class="row">
      <div class="col-12 row d-flex align-items-center justify-content-between">
        <p class="text-white fw-bold col-8">Estatisticas Alternativas de Espingarda:</p>
        <div class="col-4 d-flex justify-content-center align-items-center">
          <button
            type="button"
            class="btn btn-outline-light btn-sm border-0 "
            data-bs-toggle="collapse"
            data-bs-target="#detalhesSAD"
          >
            Exibir
          </button>
        </div>

      </div>
      <div class="ps-5 pb-2 collapse" id="detalhesSAD">
        <p class="text-white fw-light">
          <span class="fw-bold">Projeteis Disparados:</span>
          {{ dadosArma.altShotgunStats.shotgunPelletCount }}
        </p>
        <p class="text-white fw-light">
          <span class="fw-bold">Dispersão da Rajada:</span>
          {{ dadosArma.altShotgunStats.burstRate }}°
        </p>
      </div>
    </div>

    <!-- Status da Rajada -->
    <div v-if="dadosArma.airBurstStats">
      <div class="col-12 row d-flex align-items-center justify-content-between">
        <p class="text-white fw-bold col-8">Estatísticas de Rajada:</p>
        <div class="col-4 d-flex justify-content-center align-items-center">
          <button
            type="button"
            class="btn btn-outline-light btn-sm border-0 "
            data-bs-toggle="collapse"
            data-bs-target="#detalhesBurst"
          >
            Exibir
          </button>
        </div>

      </div>
      <div class="ps-5 collapse" id="detalhesBurst">
        <p class="text-white fw-light">
          - <span class="fw-bold">Projéteis por disparo:</span>
          {{ dadosArma.airBurstStats.shotgunPelletCount }}
        </p>
        <p class="text-white fw-light">
          - <span class="fw-bold">Distância da Rajada:</span>
          {{ dadosArma.airBurstStats.burstDistance }}
        </p>
      </div>
    </div>

    <!-- Dano em distância -->
    <div v-if="dadosArma.damageRanges" class="row w-100">
      <div class="col-12 row d-flex align-items-center justify-content-between">
        <p class="text-white fw-bold col-8">Estatísticas de Distância:</p>
        <div class="col-4 d-flex justify-content-center align-items-center">
          <button
            type="button"
            class="btn btn-outline-light btn-sm border-0"
            data-bs-toggle="collapse"
            data-bs-target="#detalhesDist"
          >
            Exibir
          </button>
        </div>

      </div>
      <div class="ps-5 collapse" id="detalhesDist">
        <div v-for="(item, index) in dadosArma.damageRanges" :key="index">
          <p class="fw-bold text-white m-0 mb-1">
            Entre {{ item.rangeStartMeters }} e {{ item.rangeEndMeters }} metros:
          </p>
          <div class="ps-4 mb-4">
            <p class="fw-light lh-sm p-1 m-0 text-white">
              <span class="fw-bold lh-sm p-1 m-0">- Dano na Cabeça: </span>{{ item.headDamage }}
            </p>
            <p class="fw-light lh-sm p-1 m-0 text-white">
              <span class="fw-bold lh-sm p-1 m-0">- Dano no Corpo: </span>{{ item.bodyDamage }}
            </p>
            <p class="fw-light lh-sm p-1 m-0 text-white">
              <span class="fw-bold lh-sm p-1 m-0">- Dano nas pernas: </span>{{ item.legDamage }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
