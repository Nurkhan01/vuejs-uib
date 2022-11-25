<template>
  {{$route.params}}
  <div>{{ $route.params.id }}</div>
  <div>{{ userId }}</div>
  <button @click="goHome">go Home</button>
  {{apiData}}
</template>

<script>
import httpClient from "../../services/http.service";

export default {
  name: "UsersData",
  data() {
    return  {
      apiData: '',
    }
  },
  computed: {
    userId() {
      return "The user id is equal to" + " " + this.$route.params.id
    }
  },
  methods: {
    goHome() {
      this.$router.push('/web-calculator')
    },
    async getData() {
      const {data} =await httpClient.get('api/say-hello')
      this.apiData = data
      console.log(data)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>