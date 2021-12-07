<template>
  <div class="app">
    {{list}}
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import useAnimeList from './store/animeListStore';

const animeList = useAnimeList()
const list = computed(() => animeList.getList)
onMounted(() => animeList.setList(1))
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  * {
    padding: 0;
    margin: 0;
  }
  .app {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }
</style>
