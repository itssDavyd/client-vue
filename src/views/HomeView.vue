<template>
  <div class="row" v-if="user">
    <div class="col-lg-8 offset-lg-2">
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>TITULO</th>
          <th>DESCRIPTION</th>
          <th>FECHA CREACIÓN</th>
          <th>FECHA MODIFICACIÓN</th>
        </tr>
        </thead>
        <tbody class="table-group-divider" id="contenido">
        <tr v-for="(post, index) in posts" :key="post.id">
          <td>{{ (index) }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td>{{ post.fecha_creacion }}</td>
          <td>{{ post.fecha_modificacion }}</td>
          <td>
            <router-link :to="{path:'edit/'+post.id}" class="btn btn-warning">
              <i class="fa-solid fa-edit"></i>&nbsp;
              <button class="btn btn-danger" v-on:click="eliminar(post.id,post.title)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row" v-if="!user">You are not logged in!</div>
</template>

<script>
import axios from 'axios';
import {confirmar} from "@/funciones";
//Metodo montado para las peticiones que realiza al llegar a este template de HOME.
export default {
  data() {
    return {posts: null, user: null}
  },
  async created() {
    const res = await axios.get('user');
    this.user = res.data.user;
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios.get('http://apimsg.com.devel/api/posts').then(
          response => (
              this.posts = response.data.data
          )
      );
    },
    eliminar(id, title) {
      confirmar(id, title);
    }
  }
}
</script>

