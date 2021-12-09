<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from "vue"
  import useAnimeList from "./store/animeListStore"

  const animeList = useAnimeList()
  onMounted(() => animeList.setList(1))
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  img {
    display: block;
  }

  * {
    padding: 0;
    margin: 0;
  }
  .app {
    padding: 10px 150px 0 10px;
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
  }
</style>
