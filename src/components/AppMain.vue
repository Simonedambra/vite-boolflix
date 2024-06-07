<script>
import axios, { Axios } from 'axios';
import { store } from '../store';


export default{
    data(){

return{
    store,
}


}
,methods: {
        getsearch() {
            axios
            .get(this.store.apiurl, {
                params:{
                    api_key:'7732db7e2c7988f74df2d534b524a87d',
                    query: this.store.searchkey
                }
            }).then((response) => {
this.store.movie = response.data.results;

// this.store.movie.forEach((element) => {


    // this.store.star=Math.ceil(element.vote_average / 2)
    // console.log(this.store.star)


    // let vote =(element.vote_average / 2)
    // this.voteNumber.push(Math.ceil(vote));
    // console.log(this.voteNumber)

// });
       
    
});

axios
            .get(this.store.apiurlTv, {
                params:{
                    api_key:'7732db7e2c7988f74df2d534b524a87d',
                    query: this.store.searchkey
                }
            }).then((response) => {
this.store.tv = response.data.results;
console.log(this.store.tv)

});
},

    
    
    }
    
    }
</script>
<template>
     
    <input type="text" v-model="this.store.searchkey">
    <button @click="getsearch()">search</button>
<ul>
    <li v-for="index in this.store.movie">
        <h2>titolo:{{index.title}}</h2>
        <h2>titolo originale:{{index.original_title}}</h2>
        <div>
            <span v-if="index.original_language==='en'"><img src="/src/img/748024_flag_kingdom_united_icon.png" alt="en"></span>
            <span v-if="index.original_language==='it'"><img src="/src/img/748049_flag_italy_icon.png" alt="it"></span>
        </div>
        <span v-for="i in 5">
            <span v-if=" i <= Math.ceil(index.vote_average / 2)"><font-awesome-icon icon="fa-solid fa-star" style="color: gold;" /></span>
            <span v-else><font-awesome-icon icon="fa-regular fa-star" style="color: gold;"/></span>
        </span>
    </li>
    
</ul>
<ul>
    <li v-for="index in this.store.tv">
        <h2>titolo:{{index.name}}</h2>
        <h2>titolo originale:{{index.original_name}}</h2>
        <div>
            <span v-if="index.original_language==='en'"><img src="/src/img/748024_flag_kingdom_united_icon.png" alt="en"></span>
            <span v-if="index.original_language==='it'"><img src="/src/img/748049_flag_italy_icon.png" alt="it"></span>
        </div>
        <span v-for="i in 5">
            <span v-if=" i <= Math.ceil(index.vote_average / 2)"><font-awesome-icon icon="fa-solid fa-star" style="color: gold;" /></span>
            <span v-else><font-awesome-icon icon="fa-regular fa-star" style="color: gold;"/></span>
        </span>
    </li>
</ul>


</template>

<style>
ul{

li{
    background-color: aqua;
    height: 300px;
    width: 200px;
    border: 2px solid black;
}
}

</style>