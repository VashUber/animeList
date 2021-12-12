<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, onUpdated, watch } from "vue"
  import { useRoute, useRouter } from "vue-router"
  import useAnimeList from "./store/animeListStore"

  const animeList = useAnimeList()
  const route = useRoute()
  const router = useRouter()
  const getAnime = animeList.getAnime

  const anime = computed(() => getAnime(+route.params?.id))

  onMounted(async () => {
    await router.isReady()
    await animeList.setList(+route.params?.page || 1)
    document.title = anime.value?.title || "Anime list"
  })

  watch(route, async () => {
    if (route.params?.page) await animeList.setList(+route.params?.page || 1)
    document.title = anime.value?.title || "Anime list"
  })
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
    padding: 20px;
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
    background: $bg;
    color: #fff;
    min-height: calc(100vh - 40px);
  }
</style>
