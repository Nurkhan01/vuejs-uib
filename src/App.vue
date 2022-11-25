<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <WebCalculator/>-->
  <p><router-link to="/helloWorld">Go to Hello Page</router-link></p>
  <p v-if="role=='admin'"><router-link to="/web-calculator">Go to Web Calculator</router-link></p>
  <router-view/>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import WebCalculator from './components/WebCalculator.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // WebCalculator
  },
  computed : {
    role(){
      return localStorage.getItem('role')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
