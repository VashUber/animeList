<template>
  <div class="list">
    <Card v-for="item in list" :key="item.mal_id" :item="item" />
  </div>
  <div>
    <Button :path="pathPrev" />
    <Button :path="pathNext" />
  </div>
</template>

<script setup lang="ts">
  import { computed, onBeforeUpdate, onMounted, ref } from "vue"
  import Card from "../components/Card.vue"
  import Button from "../components/Button.vue"
  import useAnimeList from "../store/animeListStore"
  import { useRoute } from "vue-router"

  const route = useRoute()
  const animeList = useAnimeList()
  const list = computed(() => animeList.getList)
  const pathNext = computed(() => (+route.params?.page || 1) + 1)
  const pathPrev = computed(() => {
    if (+route.params?.page !== 1 && route.params?.page)
      return +route.params?.page - 1
    return ""
  })
</script>

<style scoped lang="scss">
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
  }
</style>
