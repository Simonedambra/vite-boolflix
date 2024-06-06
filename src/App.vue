<!-- <script></script> -->
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';
export default{
  data(){
return{
  store,
}


  },
 
  components:{
AppHeader,
AppMain

  },
  }


</script>
<template>
  <AppHeader/>
  <AppMain/>
  
</template>
<!-- <style></style> -->
