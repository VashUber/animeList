<template>
  <div class="card" @mouseover="over" @mouseleave="leave">
    <transition name="show">
      <MiniCard :item="item" class="card__minicard" v-show="show" />
    </transition>
    <img :src="item.image_url" :alt="item.title" class="card__img" />
    <p class="card__title">{{ item.title }}</p>
    <p class="card__type">Type: {{ item.type }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import { anime } from "../types"
  import MiniCard from "./MiniCard.vue"

  const { item } = defineProps<{ item: anime }>()
  const show = ref(false)
  const hovering = ref(false)
  let time = 0

  const over = () => {
    hovering.value = true
    time = setTimeout(() => {
      show.value = hovering.value
    }, 600)
  }

  const leave = () => {
    show.value = false
    hovering.value = false
    clearTimeout(time)
  }
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    justify-self: center;
    width: 130px;

    &__img {
      width: 130px;
      height: 200px;
      padding-bottom: 5px;
    }

    &__title {
      width: 130px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .show-enter-active,
  .show-leave-active {
    transition: all 0.4s ease-out;
  }
  .show-enter-from,
  .show-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }
</style>
