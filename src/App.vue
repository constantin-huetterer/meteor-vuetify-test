<template>
  <div>
    <h1>Welcome to Meteor!</h1>
    <v-btn @click="openDialog">Test</v-btn>
    <hello />
    <info />
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Info from './components/Info.vue'

export default {
  components: {
    Hello,
    Info,
  },
  methods: {
    openDialog(){
      alert('test') // Dialog doesn't have to be included to trigger the error
      // const res = await this.$dialog.confirm({
      //   text: 'Do you really want to exit?',
      //   title: 'Warning'
      // })
    }
  }
}
</script>

<style>
body {
  font-family: sans-serif;
  padding: 10px;
}
</style>
