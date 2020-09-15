import Vue from 'vue'
import Vuetify from 'vuetify'
import VueMeteorTracker from 'vue-meteor-tracker'

import 'vuetify/dist/vuetify.min.css'
Vue.use(VueMeteorTracker)

Vue.use(Vuetify)

const opts = {}

export const vuetify = new Vuetify(opts)

