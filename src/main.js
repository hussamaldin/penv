import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'animate.css'
import './index.css'
import store from "./store";
import Vue3Geolocation from 'vue3-geolocation';
import * as VueGoogleMaps from 'vue3-google-map'


createApp(App).use(store).use(router).use(Vue3Geolocation).use(VueGoogleMaps, {
    load:{
    key:'AIzaSyCa9zTgqFKD6k6xcUey13_SCoxNe_DSFRQ'
},
autobindAllEvents: true,
}).mount("#app");


