import { createApp } from 'vue';


// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//import style
import './assets/scss/main.scss';

//import vue root component
import App from './App.vue';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
library.add(faStar, faStarRegular);
import { library } from '@fortawesome/fontawesome-svg-core';
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
