<template>
  <div class="list">
    <Card v-for="item in list" :key="item.mal_id" :item="item" />
  </div>
</template>

<script setup lang="ts">
  import { computed, onBeforeUpdate, onMounted, ref } from "vue"
  import Card from "../components/Card.vue"
  import useAnimeList from "../store/animeListStore"

  const animeList = useAnimeList()
  const list = computed(() => animeList.getList)
</script>

<style scoped lang="scss">
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
  }
</style>
