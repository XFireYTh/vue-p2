<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-100 d-flex justify-content-center bg-dark">
    <div class="container m-3">
      <div class="col-6">
        <a href="/"><img src="./components/img/logo.png" alt="logo" id="logo" /></a>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="w-100 d-flex align-items-center justify-content-around bg-dark">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-5">
          <p class="display-4 text-light text-center">Valorant Info</p>
          <p class="text-light text-center">
            Conteúdo produzido por Thomas e Yago para fins educacionais
          </p>
        </div>

        <div class="col-1 d-sm-none d-md-inline" id="bar_foot">
          <div class="d-flex h-100 align-items-center justify-content-center">
            <div class="border border-light h-100"></div>
          </div>
        </div>

        <div class="col-sm-12 col-md-5">
          <div class="row d-flex h-100 align-items-center justify-content-center">
            <p class="col-4 text-white text-center">
              Todo conteúdo aqui utilizado é provido pela Valorant API
            </p>
            <a href="https://valorant-api.com/" class="col-sm-12 col-md-4" target="_blank">
              <img src="./components/img/logo_transparent.png" alt="ValoApi Logo" id="valApiLogo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#logo {
  width: 8vw;
}
#app {
  background-color: #151515;
}
main {
  width: 100vw;
  min-height: 80vh;
  background-color: #151515;
}
footer {
  min-height: 20vh;
}
#valApiLogo {
  width: 6vw;
}

.bg-valDark {
  background-color: #151515;
}

#bar_foot {
  height: 15vh;
}
</style>
