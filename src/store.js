import { reactive } from "vue";

export const store = reactive({
    movie: [],
    tv: [],
    searchkey: '',
    apiurl: 'https://api.themoviedb.org/3/search/movie',
    apiurlTv: 'https://api.themoviedb.org/3/search/tv',

}


)