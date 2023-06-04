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
            </router-link>
            <button data-toggle="modal" data-target="#exampleModal" class="btn btn-danger"
                    v-on:click="deletePost(post.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row" v-if="!user">
    <div class="col-lg-8 offset-lg-2">
      You are not logged in!
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="modal-1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import app from '../App'
//Metodo montado para las peticiones que realiza al llegar a este template de HOME.
export default {
  data() {
    return {posts: null, user: null}
  },
  async created() {
    const res = await axios.get('user');
    if (res.data.status == 200) {
      this.user = res.data.user;
    } else {
      this.user = false;
    }
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
    deletePost(id) {
      axios.delete('posts/' + id).then(
          res => {
            if (res.data.status != 200) {
              alert(res.data.message);
              location.reload()
            }
          }
      )
    }
  }
}
</script>

