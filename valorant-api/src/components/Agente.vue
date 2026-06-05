<script lang="ts">
import api from '@/services/api';

export default {
    name: 'Agente',
    data() {
    return {
        uuid: '',
        dataAgente: {}
    }
  },
  methods: {
    uuidGet() {
        const params = new URLSearchParams(window.location.search)
        const id = params.get('uuid')
        this.uuid += id
    },
    infoGet() {
        const url = `/agents/${this.uuid}?isPlayableCharacter=true&language=pt-BR`
        api.get(url).then(res => {
            const agente = res.data.data
            const obj = {
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
            this.dataAgente = obj
        })
    }
  },
  beforeCreate() {
    this.uuidGet()
  },
  beforeMount() {
    this.infoGet()
    console.log(this.dataAgente)
  }
}

</script>

<template>

    <div class="container d-flex justify-content-around align-items-center p-2">
        <div class="row w-100">
            <div class="col-md-4 col-sm-12">
                <div id="headbtn">
                    <button type="button" class="btn btn-outline-success">Icone</button>
                    <button type="button" class="btn btn-outline-primary">Inteiro</button>
                </div>
            </div>
        </div>
    </div>

</template>