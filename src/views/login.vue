<template>
  <div style="display: flex; justify-content: center;">
    <div class="card" style="width: 40rem; margin: 1rem;">
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" aria-describedby="emailHelp"
                   placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">Introduzca su email.</small>
          </div>
          <br>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password
      }
      const res = await axios.post('login', data);
      localStorage.setItem('token', res.data.token);
      this.$router.push('/');
    }
  }
}

</script>