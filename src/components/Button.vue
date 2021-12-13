<template>
  <router-link :to="'/' + path" class="button">{{ text }}</router-link>
</template>

<script setup lang="ts">
  const { path, text } = defineProps<{ path: number | string; text: string }>()
</script>

<style scoped lang="scss">
  .button {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 8px 25px;
    font-size: 20px;
    border-radius: 10px;
    background: #000;
  }
</style>
