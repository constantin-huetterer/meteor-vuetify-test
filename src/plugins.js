import Vue from 'vue'
import Vuetify from 'vuetify'
import VueMeteorTracker from 'vue-meteor-tracker'
import VuetifyDialog from 'vuetify-dialog'

import 'vuetify-dialog/dist/vuetify-dialog.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueMeteorTracker)
Vue.use(Vuetify)

const opts = {}

export const vuetify = new Vuetify(opts)

Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})