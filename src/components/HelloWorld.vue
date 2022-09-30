<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{helloWorld}}
    <p>
      <router-link to="/">Go to Home</router-link>
    </p>
    <p>
      <router-link to="/users/2">User</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return  {
      hello: 'HelloWorld',
    }
  },
  computed: {
    helloWorld(){
      return this.hello + " 123"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
