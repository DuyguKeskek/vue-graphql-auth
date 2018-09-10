<template>
  <div>
    <h4>{{login ? 'Login to Your Account' : 'Sign Up'}}</h4>
    <div>
      <b-form-input
        v-show="!login"
        v-model="name"
        type="text"
        placeholder="Your name">
      </b-form-input>
      <b-form-input
        v-model="email"
        type="text"
        placeholder="Your email address">
      </b-form-input>
      <b-form-input
        v-model="password"
        type="password"
        placeholder="Password">
      </b-form-input>
    </div>
    <b-button type="submit" variant="primary"
        @click="confirm()">
        {{login ? 'Login' : 'Create Account'}}
    </b-button>
    <b-button type="submit" variant="danger"
        @click="login = !login">
        {{login ? 'Sign Up' : 'Already have an account?'}}
    </b-button>
    </div>
</template>

<script>
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'
import { CREATE_USER_MUTATION, SIGNIN_USER_MUTATION } from '../constants/graphql'

export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      login: true,
      name: '',
      password: ''
    }
  },
  methods: {
    confirm () {
      const { name, email, password } = this.$data
      if (this.login) {
        this.$apollo.mutate({
          mutation: SIGNIN_USER_MUTATION,
          variables: {
            email,
            password
          }
        }).then((result) => {
          const id = result.data.signinUser.user.id
          const token = result.data.signinUser.token
          this.saveUserData(id, token)
          console.log(result)
        }).catch((error) => {
          alert(error)
          this.$router.push({path: '/login'})
        })
      } else {
        this.$apollo.mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            name,
            email,
            password
          }
        }).then((result) => {
          const id = result.data.signinUser.user.id
          const token = result.data.signinUser.token
          this.saveUserData(id, token)
          console.log(result)
        }).catch((error) => {
          alert(error)
          this.$router.push({ path: '/login' })
        })
      }
      this.$router.push({path: '/home'})
    },
    saveUserData (id, token) {
      localStorage.setItem(GC_USER_ID, id)
      localStorage.setItem(GC_AUTH_TOKEN, token)
      this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
    }
  }
}
</script>
<style>
.form-control {
    display: block;
    margin: 1rem auto;
    width: auto;
}
</style>
