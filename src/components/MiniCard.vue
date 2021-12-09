<template>
  <div class="miniCard"></div>
</template>

<script setup lang="ts">
  import { anime } from "../types"

  const { item } = defineProps<{ item: anime }>()
</script>

<style scoped lang="scss">
  .miniCard {
    position: absolute;
    z-index: 554;
    left: 130px;
    top: 15px;
    width: 150px;
    height: 170px;
    background: rgb(0, 0, 0);
  }
</style>
