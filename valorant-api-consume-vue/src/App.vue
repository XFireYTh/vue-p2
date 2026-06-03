<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-100 bg-dark p-2 d-flex align-items-center justify-content-center">
    <div class="w-75">
      <a href="/"><img src="@/components/img/logo.png" alt="logo" /></a>
    </div>
  </header>

  <main class="w-100 d-flex flex-column justify-content-center align-items-center mt-4">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  height: 8vh;
}

header a img {
  height: 5vh;
}
</style>
