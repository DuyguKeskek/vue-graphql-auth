<template>
  <div>
    <div v-if="userId"><h4>You successfully logged in !</h4></div>
    <div v-if="userId" @click="logout()">Logout</div>
    <router-link v-else to="/login">Login</router-link>
  </div>
</template>

<script>
  import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'

  export default {
    name: 'AppHeader',
    computed: {
      userId () {
        return this.$root.$data.userId
      }
    },
    methods: {
      logout () {
        localStorage.removeItem(GC_USER_ID)
        localStorage.removeItem(GC_AUTH_TOKEN)
        this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
      }
    }
  }
</script>