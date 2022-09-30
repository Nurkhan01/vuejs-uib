<template>
  <div>{{ $route.params.id }}</div>
  <div>{{ userId }}</div>
  <button @click="goHome"></button>
</template>

<script>
export default {
  name: "UsersData",
  computed: {
    userId() {
      return "The user id is equal to" + " " + this.$route.params.id
    }
  },
  methods: {
    goHome() {
      this.$router.push('/web-calculator')
    }
  }
}
</script>

<style scoped>

</style>