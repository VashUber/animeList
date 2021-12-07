import axios from "axios"
import { defineStore } from "pinia"

const useAnimeList = defineStore({
  id: "AnimeList",
  state: () => ({
    list: [],
  }),
  actions: {
    setList(page: number) {
      axios
        .get(`https://api.jikan.moe/v3/top/anime/${page}`)
        .then((response) => (this.list = response.data))
    },
  },
  getters: {
    getList: (state) => state.list,
  },
})

export default useAnimeList