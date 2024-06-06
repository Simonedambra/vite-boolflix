import { reactive } from "vue";

export const store = reactive({
    Movie: [],
    searchkey: '',
    apiurl: 'https://api.themoviedb.org/3/search/movie',

}


)