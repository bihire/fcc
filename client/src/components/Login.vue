<template>
  <v-layout mt-4>
    <v-flex xs6 offset-xs3>
      <h1>Login</h1>
      <div class="white elevation-2" id="login">
        <v-toolbar flat dense>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4">
          <v-flex >
          <v-text-field
            label="Email" v-model="email"
          ></v-text-field>
        </v-flex><br>
        <v-flex>
          <v-text-field
            label="Password" v-model="password" type="password"
          ></v-text-field>
        </v-flex>
        <br>
        <div class="error" v-html="error"></div>
        <br>
        <v-btn @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthanticationService from '@/services/Authanticationservice'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
       try {
      const response = await AuthanticationService.login({
        email: this.email,
        password: this.password
      })
    } catch (error) {
      this.error = error.response.data.error
    }
    }
  }
}
</script>
<style scoped>
.error {
  color: red;
}
.login {
  min-width: 240px;
}
</style>
