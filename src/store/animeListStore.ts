import axios from "axios"
import {defineStore} from "pinia"
import {anime} from "../types"

const useAnimeList = defineStore({
    id: "AnimeList",
    state: () => ({
        list: [] as Array<anime>,
    }),
    actions: {
        async setList(page: number) {
            await axios
                .get(`https://api.jikan.moe/v3/top/anime/${page}`)
                .then((response) => (this.list = response.data.top))
        },
    },
    getters: {
        getList: (state) => state.list,
        getAnime: (state) => {
            return (animeId: number) =>
                state.list.find((elem) => elem.mal_id === animeId) as anime
        },
    },
})

export default useAnimeList
