<template>
  <div style="display: flex; justify-content: center;">
    <div class="card" style="width: 40rem; margin: 1rem;">
      <div class="card-body">
        <h5 class="card-title">Registro</h5>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" aria-describedby="emailHelp"
                   placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">Introduzca su email.</small>
          </div>
          <br>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="name"
                   placeholder="Enter nombre">
          </div>
          <br>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
          </div>
          <br>
          <div class="form-group">
            <label for="c_password">Confirmar Password</label>
            <input type="password" class="form-control" id="c_password" placeholder="Password" v-model="c_password">
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      name: '',
      password: '',
      c_password: ''
    }
  },
  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        name: this.name,
        password: this.password,
        c_password: this.c_password
      }
      await axios.post('register', data);
      this.$router.push('/login');
    }
  }
}

</script>