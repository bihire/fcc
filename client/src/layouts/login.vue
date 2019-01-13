<template>
  <div id="app">
    <v-app>
      <div>
        <div class="toolbar">
          <v-content>
            <v-container class="container">
              <router-view/>
            </v-container>
          </v-content>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import ContentBar from '@/components/ContentBar'
export default {
  name: 'login',
  components: {
    ContentBar
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c2d2e2;
  margin-top: 60px;
}
.container {
  max-width: 960px;
  background: #2c3e50;
  margin-top: 60px;
  padding-top: 60px;
  padding: 0%;
}
</style>
