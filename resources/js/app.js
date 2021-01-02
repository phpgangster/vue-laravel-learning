require('./bootstrap');

import Vue from 'vue';
import App from "./components/App";
import mainApp from './components/App'

import panelLayout from './components/layouts/panel'
Vue.component('panel-layout', panelLayout)

var app = new Vue({
    el: '#app',
    components: {mainApp},
    method: {},
    render: h => h(App),
})

/*
const app = new Vue({
    el: '#app',
    components: {mainApp},
    method: {},
    router: routes,
    i18n,
    render: h => h(App),
    store
});
*/
