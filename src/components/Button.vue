<template>
  <router-link :to="'/' + path">Next</router-link>
</template>

<script setup lang="ts">
  const { path } = defineProps<{ path: number | string }>()
</script>

<style scoped lang="scss">
  .button {
    background: $blue;
  }
</style>
