<template>
  <div class="bro">
    <div class="navbar">
      <v-toolbar class="cyan" dark>
        <v-toolbar-title class="mr-4">
          <div>Home</div>
        </v-toolbar-title>

        <v-toolbar-items>
          <v-btn flat dark>contacts</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <router-link to="aboutus">
          <v-btn flat dark>About-us</v-btn>
        </router-link>
      </v-toolbar>
    </div>
    <div class="white elevation-2 login">
      <div>
        <div>
          <v-toolbar flat dense>
            <v-toolbar-title>FERRARI COURIER COMPANY LTD</v-toolbar-title>
          </v-toolbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bars: [
      { class: "" },
      { class: "", dark: true },
      { class: "primary", dark: true },
      { class: "elevation-0" }
    ]
  })
};
</script>
<style scoped>
.bro {
  width: 100%;
  padding: 0;
  overflow: auto;
  height: 70px;
}

.login {
  position: relative;
  width: 240px;
  float: right;
  height: 100%;
}
.navbar {
  float: right;
  width: 700px;
  position: relative;
}
</style>
