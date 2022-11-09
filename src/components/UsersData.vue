<template>
  {{$route.params}}
  <div>{{ $route.params.id }}</div>
  <div>{{ userId }}</div>
  <button @click="goHome">go Home</button>
  {{apiData}}
</template>

<script>
import axios from "axios";

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
      const {data} =await axios.get('http://localhost:8888/backend/basic/web/index.php/api/say-hello')
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