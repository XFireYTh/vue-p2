<script lang="ts">
import api from '@/services/api'
import StatusArma from '@/components/armas/Status.vue'

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
  components: {
    StatusArma,
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
    <div class="container rounded" v-if="dadosArma.nome">
      <div class="row d-flex justify-content-around">
        <div class="col-md-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
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
        <div class="col-md-12 col-lg-8  p-0 d-flex">
          <div
            class="col-lg-2 row-md  d-flex flex-lg-column align-items-center justify-content-center pt-4 pb-4 gap-3 p-2 h-100"
          >
            <button
              type="button"
              v-if="statusArma"
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

          <div class="col-lg-10 col-md-12 mb-3">
            <div v-if="menuDetalhes == 'loja'">
              <div class="row">
                <h4 class="text-light col-12 text-center pt-3">Status da Loja</h4>
              </div>
            </div>

            <div v-if="menuDetalhes == 'status' && statusArma">
              <h4 class="text-light col-12 text-center pt-3 pb-3">
                Status da {{ dadosArma.nome }}
              </h4>
              <StatusArma
                :dadosArma="statusArma"
              />
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

    <div class="container d-flex justify-content-center mt-5 mb-5">
      <a href="/armas" class="btn btn-outline-light">Voltar</a>
    </div>
  </div>
</template>
