<script lang="ts">
import api from '@/services/api'

export default {
  name: 'DetalheArmas',
  data() {
    return {
      uuid: '',
      dadosArma: {},
      statusArma: {},
      statusLoja: {},
      skinsArma: {},
      skindefault: {},
      menuDetalhes: 'status',
    }
  },
  methods: {
    uuidGet() {
      const params = new URLSearchParams(window.location.search)
      const id = params.get('id')
      this.uuid = id || ''
    },

    async armaGet() {
      if (!this.uuid) {
        return
      }
      const url = `/weapons/${this.uuid}?language=pt-BR`
      await api.get(url).then((res) => {
        const arma = res.data.data
        console.log(arma)
        this.dadosArma = {
          nome: arma.displayName,
          img: arma.displayIcon,
          categoria: arma.category,
        }

        this.skindefault = {
          uuid: arma.defaultSkinUuid,
        }

        this.skinsArma = arma.skins
        this.statusArma = arma.weaponStats
        this.statusLoja = arma.shopData || ''

        console.log(this.dadosArma)
      })
    },

    formatarCategoria(categoria: string) {
      let formatWord = ''
      for (let i = 0; i < categoria.length; i++) {
        if (i < 21) {
          continue
        }
        formatWord += categoria[i]
      }
      return formatWord
    },
  },
  beforeMount() {
    ;(this.uuidGet(), this.armaGet())
  },
}
</script>

<template>
  <div class="w-100 d-flex flex-column justify-content-center align-items-center">
    <div class="container border rounded" v-if="dadosArma.nome">
      <div class="row d-flex justify-content-around">
        <div class="col-md-12 col-lg-4 border d-flex flex-column align-items-center">
          <p class="mt-2 text-center text-light">{{ dadosArma.nome }}</p>
          <img :src="dadosArma.img" :alt="dadosArma.nome + 'Foto'" class="w-75 mt-2 mb-2" />
          <div class="row w-100 mt-2">
            <p class="text-white fw-light lh-1" v-if="statusLoja">
              <strong class="fw-bold">Preço:</strong> {{ statusLoja.cost }} Créditos
            </p>
            <p class="text-white fw-light lh-1" v-if="!statusLoja">
              <strong class="fw-bold">Categoria: </strong>
              {{ formatarCategoria(dadosArma.categoria) }}
            </p>
            <p class="text-white fw-light lh-1" v-else>
              <strong class="fw-bold">Categoria: </strong> {{ statusLoja.categoryText }}
            </p>
          </div>
        </div>

        <!-- Parte dos detalhes -->
        <div class="col-md-12 col-lg-8 border p-0 d-flex">
          <div
            class="col-lg-2 row-md border d-flex flex-lg-column align-items-center justify-content-start pt-4 pb-4 gap-3 p-2 h-100"
          >
            <button
              type="button"
              @click="menuDetalhes = 'status'"
              class="btn btn-outline-light border-0 col-8 p-2"
            >
              Status
            </button>
            <button
              type="button"
              v-if="statusLoja"
              @click="menuDetalhes = 'loja'"
              class="btn btn-outline-light border-0 col-8 p-2"
            >
              Loja
            </button>
            <button
              type="button"
              @click="menuDetalhes = 'skins'"
              class="btn btn-outline-light border-0 col-8 p-2"
            >
              Skins
            </button>
          </div>

          <div class="col-lg-10 col-md-12 border">
            <div v-if="menuDetalhes == 'loja'">
              <div class="row">
                <h4 class="text-light col-12 text-center pt-3">Status da Loja</h4>
              </div>
            </div>

            <div v-if="menuDetalhes == 'status'">
              <h4 class="text-light col-12 text-center pt-3 pb-3">
                Status da {{ dadosArma.nome }}
              </h4>
              <div class="ms-2 me-2">
                <p v-if="statusArma.fireRate" class="text-white fw-light">
                  <span class="fw-bold">Cadência de tiro:</span> {{ statusArma.fireRate }}
                </p>
                <p v-if="statusArma.magazineSize" class="text-white fw-light">
                  <span class="fw-bold">Capacidade do pente:</span> {{ statusArma.magazineSize }}
                </p>
                <p v-if="statusArma.runSpeedMultiplier" class="text-white fw-light">
                  <span class="fw-bold">Multiplicador de Velocidade de Corrida:</span>
                  {{ statusArma.runSpeedMultiplier }}
                </p>
                <p v-if="statusArma.equipTimeSeconds" class="text-white fw-light">
                  <span class="fw-bold">Tempo para Equipar em Segundos:</span>
                  {{ statusArma.equipTimeSeconds }} segundos
                </p>
                <p v-if="statusArma.reloadTimeSeconds" class="text-white fw-light">
                  <span class="fw-bold">Tempo de Recarga:</span>
                  {{ statusArma.reloadTimeSeconds }} segundos
                </p>
                <p v-if="statusArma.firstBulletAccuracy" class="text-white fw-light">
                  <span class="fw-bold">Precisão do primeiro tiro:</span>
                  {{ statusArma.firstBulletAccuracy }}
                </p>
                <p v-if="statusArma.shotgunPelletCount" class="text-white fw-light">
                  <span class="fw-bold">Projéteis por disparo:</span>
                  {{ statusArma.shotgunPelletCount }}
                </p>
                <p v-if="statusArma.wallPenetration" class="text-white fw-light">
                  <span class="fw-bold">Penetração de paredes:</span>
                  {{ statusArma.wallPenetration }}
                </p>
                <p v-if="statusArma.feature" class="text-white fw-light">
                  <span class="fw-bold">Característica Especial:</span> {{ statusArma.feature }}
                </p>
                <p v-if="statusArma.fireMode" class="text-white fw-light">
                  <span class="fw-bold">Modo de Tiro:</span> {{ statusArma.fireMode }}
                </p>
                <p v-if="statusArma.altFireType" class="text-white fw-light">
                  <span class="fw-bold">Modo de tiro alternativo:</span>
                  {{ statusArma.altFireType }}
                </p>
                <p v-if="statusArma.adsStats" class="text-white fw-light">
                  <span class="fw-bold">Status da Mira(ADS):</span> {{ statusArma.adsStats }}
                </p>
                <p v-if="statusArma.altShotgunStats" class="text-white fw-light">
                  <span class="fw-bold">Estatísticas Alternativas de Espingarda:</span>
                  {{ statusArma.altShotgunStats }}
                </p>

                <!-- Status da Rajada -->
                <div v-if="statusArma.airBurstStats">
                  <p class="text-white fw-light">
                    <span class="fw-bold">Estatísticas da Rajada:</span>
                  </p>
                  <div class="ps-5">
                    <p class="text-white fw-light">
                      - <span class="fw-bold">Projéteis por disparo:</span>
                      {{ statusArma.airBurstStats.shotgunPelletCount }}
                    </p>
                    <p class="text-white fw-light">
                      - <span class="fw-bold">Distância da Rajada:</span>
                      {{ statusArma.airBurstStats.burstDistance }}
                    </p>
                  </div>
                </div>

                <!-- Dano em distância -->
                <div v-if="statusArma.damageRanges">
                  <p class="text-white fw-light">
                    <span class="fw-bold">Estatísticas de Distância:</span>
                  </p>
                  <div class="ps-5">
                    <div v-for="(item, index) in statusArma.damageRanges" :key="index">
                      <p class="fw-bold text-white m-0">
                        Entre {{ item.rangeStartMeters }} e {{ item.rangeEndMeters }} metros:
                      </p>
                      <div class="ps-4 mb-2">
                        <p class="fw-light lh-sm p-1 m-0 text-white">
                          <span class="fw-bold lh-sm p-1 m-0">- Dano na Cabeça: </span
                          >{{ item.headDamage }}
                        </p>
                        <p class="fw-light lh-sm p-1 m-0 text-white">
                          <span class="fw-bold lh-sm p-1 m-0">- Dano no Corpo: </span
                          >{{ item.bodyDamage }}
                        </p>
                        <p class="fw-light lh-sm p-1 m-0 text-white">
                          <span class="fw-bold lh-sm p-1 m-0">- Dano nas pernas: </span
                          >{{ item.legDamage }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="menuDetalhes == 'skins'">
              <h4 class="text-light col-12 text-center pt-3">Skins</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Caso ocorra acesso direto -->
    <div class="container" v-else>
      <div class="row h-100 d-flex justify-content-center align-items-center">
        <p class="display-1 text-white text-center">Algo deu errado</p>
        <p class="text-white text-center">
          Selecione uma Arma no menu de armas ou Aguarde um momento
        </p>
      </div>
    </div>

    <div class="container d-flex justify-content-center mt-5">
      <a href="/armas" class="btn btn-outline-light">Voltar</a>
    </div>
  </div>
</template>
