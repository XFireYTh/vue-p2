<script lang="ts">
import api from '@/services/api'

export default {
  name: 'AgentesCards',
  data() {
    return {
      agentesInfo: [],
    }
  },
  methods: {

    async agentesCarregados() {
      
      let url = '/agents?isPlayableCharacter=true&language=pt-BR'

      await api.get(url).then(res => {
        const agents = res.data.data
        agents.forEach(agent => {
          let obj = {
            id: agent.uuid, 
            nome: agent.displayName, 
            img: agent.displayIcon, 
            funcao: agent.role.displayName, 
            funcaoimg: agent.role.displayIcon, 
            bg: agent.background
          }
          this.agentesInfo.push(obj)
        })
      })

    }

  },
  beforeMount() {
    this.agentesCarregados()
  },
  mounted() {
    
  }
}
</script>

<template>
  <div class="container mt-4 mb-4">
    <div class="row d-flex justify-content-center gap-2">
      <div 
        class="card border-0 col-sm-12 col-md-4 col-lg-3 col-xl-2 bg-dark" 
        :style="{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url(${agente.bg})`, 
          backgroundPosition: `center`, backgroundSize: 'auto'
        }"  
        v-for="(agente, index) in agentesInfo" 
        :key="index"
      >
        <img :src="agente.img" :alt="agente.nome" class="card-img-top">
        <div class="card-body row d-flex justify-content-center align-items-center bg-dark">
          <div class="col-6 col-xl-8 d-flex flex-column justify-content-center">
            <h5 class="fw-bold text-white lh-1">{{ agente.nome }}</h5>
            <p class="text-white lh-1">{{ agente.funcao }}</p>
          </div>
          <div class="col-4 d-flex flex-column justify-content-center">
            <img class="w-75" :src="agente.funcaoimg" :alt="agente.funcao">
          </div>
          <a :href="'/agente?uuid='+ agente.id" class="btn btn-outline-light col-12">Ver Mais</a>  
        </div>
        
      </div>
    </div>
  </div>
</template>

<style>

</style>
