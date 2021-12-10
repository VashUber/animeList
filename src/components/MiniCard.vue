<template>
  <div
    class="miniCard"
    ref="minicard"
    :class="{
      miniCard__overflow: isOverFlow,
      miniCard__notOverflow: !isOverFlow,
    }"
  >
    <h2>{{ item.title }}</h2>
    <p class="miniCard__episodes">Episodes: {{ item.episodes }}</p>
    <p class="miniCard__type">Type: {{ item.type }}</p>
    <p class="miniCard__date" v-if="item.start_date !== item.end_date">
      Aired: {{ item.start_date }} to {{ item.end_date }}
    </p>
    <p class="miniCard__date" v-else>Aired: {{ item.start_date }}</p>
    <p class="miniCard__score">Score: {{ item.score }}</p>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue"
  import { anime } from "../types"

  const { item } = defineProps<{ item: anime }>()
  const minicard = ref<null | HTMLDivElement>(null)
  const isOverFlow = ref(false)

  onMounted(() => {
    if (minicard.value) {
      const { x, width } = minicard.value.getBoundingClientRect()
      const windowWidth = window.innerWidth

      if (x + width > windowWidth) isOverFlow.value = true
    }
  })
</script>

<style scoped lang="scss">
  .miniCard {
    position: absolute;
    z-index: 554;
    width: 250px;
    height: 363px;
    top: -1px;
    padding: 10px;
    box-sizing: border-box;
    background: rgb(68, 60, 114);
    display: flex;
    flex-direction: column;

    &__notOverflow {
      left: 220px;
    }

    &__overflow {
      right: 220px;
    }

    p:not(:last-child) {
      margin-top: 5px;
    }

    &__score {
      margin-top: auto;
      margin-left: auto;
      font-size: 20px;
    }
  }
</style>
