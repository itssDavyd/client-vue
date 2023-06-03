<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <a class="navbar-brand" href="/">Posts</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="justify-content: space-between;">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-if="user">
          <router-link to="/create" class="nav-link" href="#">Crear</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-2">
        <li class="nav-item" v-if="!user">
          <router-link to="/login" class="nav-link" href="#">Login</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <router-link to="/" class="nav-link" href="#">{{ user.email }}</router-link>
        </li>
        <li class="nav-item" v-if="!user">
          <router-link to="/register" class="nav-link" href="#">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container-fluid mt-3">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {user: null}
  },
  async created() {
    const res = await axios.get('user');
    this.user = res.data.user;
  }
}
</script>
