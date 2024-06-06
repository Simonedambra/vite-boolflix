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
                    query:'ritorno'
                }
            }).then(response=> this.store.Movie=response.data)
            console.log(this.store.Movie.genres)






        }
    
    
    }
    
    }
</script>
<template>
    <button @click="getsearch()">cv</button>
<ul>
    <li ></li>
</ul>


</template>