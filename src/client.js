import Vue from 'vue'

import './plugins'
import {vuetify} from './plugins'
import App from './App.vue'

Meteor.startup(() => {
  new Vue({
    vuetify,
    el: '#app',
    ...App,
  })
})
