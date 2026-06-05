<script lang="ts">
import api from '@/services/api';

export default {
    name: 'DetalheAgente',
    data() {
    return {
        uuid: '',
        dadosAgente: {},
        icone: true,
        menuAtivo: '',
        descAtual: '',
    }
  },
  methods: {
    uuidGet() {
        const params = new URLSearchParams(window.location.search)
        const id = params.get('uuid')
        this.uuid = id || ''
    },
    async infoGet() {
        if (!this.uuid) {return}

        const url = `/agents/${this.uuid}?isPlayableCharacter=true&language=pt-BR`
        await api.get(url).then(res => {
            const agente = res.data.data
            this.dadosAgente = {
                nome: agente.displayName,
                desc: agente.description,
                icon: agente.displayIcon,
                full: agente.fullPortraitV2,
                back: agente.background,
                role: agente.role.displayName,
                rdsc: agente.role.description,
                rico: agente.role.displayIcon,
                abil: agente.abilities
            }
            this.menuAtivo = agente.displayName
            this.descAtual = agente.description
        })
    }
  },
  beforeCreate() {
    
  },
  beforeMount() {
    this.uuidGet(),
    this.dadosAgente = this.infoGet()
  },
  mounted() {
  },
}

</script>

<template>

    <div v-if="dadosAgente.abil" class="container d-flex justify-content-around align-items-center p-2">
        <div class="row w-100 d-flex justify-content-around">
            <div class="col-lg-4 col-md-12">
                <div class="w-100">
                    <div class="row d-flex justify-content-center gap-3 mt-3">
                        <button type="button" @click="icone = true" class="btn btn-outline-light border-0 col-4">Icone</button>
                        <button type="button" @click="icone = false" class="btn btn-outline-light border-0 col-4">Inteiro</button>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center p-3">
                        <img v-if="icone" :src="dadosAgente.icon" :style="{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url(${dadosAgente.back})`, backgroundPosition: 'center'}" alt="icone-agente" class="w-100">
                        <img v-else :src="dadosAgente.full" :style="{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url(${dadosAgente.back})`, backgroundPosition: 'center'}" alt="foto-agente" class="w-100">
                    </div>
                    <div class="row d-flex flex-column align-itemns-center pt-1 mb-1">
                        <p class="fs-2 fw-bold text-white text-center lh-1">{{ dadosAgente.nome }}</p>
                        <p class="fs-4 fw-light text-light text-center lh-1">{{ dadosAgente.role }}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-12 p-0 row bg-dark rounded">
                <div class="col-lg-2 row-md d-flex flex-md-column justify-content-center align-items-center gap-2 p-2">
                    <img 
                        src="@/components/img/info.png" 
                        alt="information"
                        @click="menuAtivo = dadosAgente.nome, descAtual=dadosAgente.desc"
                        class="btn btn-outline-danger col-lg-12 col-md-2 w-100"
                    >
                    <img 
                        :src="dadosAgente.rico" 
                        alt="'icon' + dadosAgente.role" 
                        @click="menuAtivo = dadosAgente.role, descAtual = dadosAgente.rdsc" 
                        class="btn btn-outline-danger col-lg-12 col-md-2 w-100"
                    >
                    <img 
                        v-for='(hab, index) in dadosAgente.abil' 
                        :key="index" 
                        :src="hab.displayIcon" 
                        :alt="hab.displayName" 
                        @click="menuAtivo = hab.displayName, descAtual = hab.description" 
                        class="btn btn-outline-danger col-lg-12 col-md-2 w-100"
                    >
                </div>
                <div class="col-lg-10 col-md-12">
                    <div class="row bg-barra pt-3">
                        <h3 class="text-white fs-2 mt-4">{{ menuAtivo }}</h3>
                    </div>
                    <div class="row mt-4">
                        <p class="text-white fs-5 lh-sm fw-light">{{ descAtual }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>