<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ helloWorld }}
    <p>
      <router-link to="/">Go to Home</router-link>
    </p>
    <p>
      <router-link to="/users/2/posts/5">User</router-link>
    </p>

    <div class="container">
      <div class="row">
        <div class="col-md-6"><input type="text" v-model="form.name"></div>
        <div class="col-md-6"><input type="number" v-model="form.price"></div>
        <div class="col-md-12">
          <select name="category" id="product_category" v-model="form.category_id">
          <option v-for="(item, index) in categories" :value="item.id" :key="index">{{item.name}}</option>
        </select>
        </div>
        <button class="text-center" @click="SaveCategory">Save</button>
        <button class="text-center" @click="updateProduct">Update</button>
      </div>
    </div>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      hello: 'HelloWorld',
      form: {
        name: '',
        price: null,
        category_id: null
      },
      formMultiple : [
        {name : 'cola', price: 250, category_id: 1},
        {name : 'cola', price: 250, category_id: 3},
        {name : 'cola', price: 250, category_id: 2},
      ],
      categories: []
    }
  },
  methods: {
    async getCategories(){
      const {data, status} = await axios.get('http://localhost:8888/backend/basic/web/index.php/api/get-categories')
      if(status == 200){
        this.categories =  data
      }
    },
    async SaveCategory(){
      const {status} = await axios.post('http://localhost:8888/backend/basic/web/index.php/api/add-product', this.form)
        if (status === 200){
          alert('Saved!!!')
        }
    },
    async updateProduct(){
      const {data, status} = await axios.put('http://localhost:8888/backend/basic/web/index.php/api/update?product_id=1', {name: 'alex'})
      if (status == 200){
        alert('updated' + data)
      }
    }
  },
  computed: {
    helloWorld() {
      return this.hello + " 123"
    }
  },
  created() {
    // this.getCategories()
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
