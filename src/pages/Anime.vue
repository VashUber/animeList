<template>
	<div class="anime">
		<img :src="anime.image_url" :alt="anime.title">
		<div class="anime__info">
			<h2>{{ anime.title }}</h2>
			<p>Type: {{ anime.type }}</p>
			<p>Episodes: {{ anime.episodes }}</p>
			<p>Start date: {{ anime.start_date }}</p>
			<p>End date: {{ anime.end_date }}</p>
			<p class="anime__score">Score: {{ anime.score }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import useAnimeList from "../store/animeListStore"
	import {useRoute} from "vue-router"
	import {computed} from "vue"

	const animeList = useAnimeList()
	const route = useRoute()
	const params = route.params?.id
	const getAnime = animeList.getAnime
	const anime = computed(() => getAnime(+params))
</script>

<style scoped lang="scss">
.anime {
	display: flex;

	&__info {
		width: 350px;
		margin-left: 20px;
		display: flex;
		flex-direction: column;
	}

	&__score {
		font-size: 25px;
		margin-top: auto;
		margin-left: auto;
	}
}

</style>
