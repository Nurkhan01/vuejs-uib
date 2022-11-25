<template>
  <div class="my-login-page">
    <section>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="card-wrapper mt-5">
            <div class="card fat border">
              <div class="card-body">

                <form @submit.prevent="login">

                  <div class="form-group mt-4">
                    <label for="username">Логин</label>
                    <input id="username" type="text" class="form-control" name="username"
                           v-model.trim="form.username" required autofocus>
                  </div>

                  <div class="form-group mt-4">
                    <label for="password">Пароль</label>
                    <input id="password" type="password" class="form-control" name="password"
                           v-model.trim="form.password" required data-eye>
                  </div>

                  <div class="mt-4">
                    <button label="Вход" type="submit"
                            style="width: 100%">Вход</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import authService from '../../services/auth.service'
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    async login() {
      const {success} = await authService.login(this.form)
      if (success) {
        return await authService.routerPush('home')
      }
    }
  }
}
</script>

<style scoped>
</style>