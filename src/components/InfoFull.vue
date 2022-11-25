<template>
<div>
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <p><span><b>Year:</b></span> {{info.born}}</p>
            <p><span><b>Short info:</b></span> {{info.shortInfo}}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
</div>
  <div>{{users}}</div>
  <div>{{text}}</div>
  <div v-for="(key, value) of doneTodos" :key="key">{{value}}</div>
</template>

<script>
import {mapActions, mapState, mapGetters} from "vuex";

export default {
name: "InfoFull",
  props: {
    title: String,
    info: Object,
    idModal: Number
  },
  data(){
    return{
      text: 'Hello World'
    }
  },
  computed: {
    ...mapState('usersdata',['users']),
    ...mapGetters('usersdata',['doneTodos']),
  },
  methods:{
    ...mapActions('usersdata', ['GET_USERS']),
  },
  async mounted() {
  await this.GET_USERS()
  }
}

</script>

<style scoped>

</style>