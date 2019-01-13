<template>
  <div id="app">
    <v-app>
      <div>
        <div class="toolbar">
          <div id="navbarblock">
            <pageHeader id="navbar"></pageHeader>

            <v-content>
              <v-container class="container">
                <ContentBar class="contentbar"/>
                <router-view/>
                <footing/>
              </v-container>
            </v-content>
          </div>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import pageHeader from "@/components/Header.vue";
import ContentBar from "@/components/ContentBar";
import Footing from "@/components/Footer";
export default {
  name: "default",
  created() {
    console.log("its passing bro");
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollpos = window.pageYOffset;
      if (prevScrollpos > currentScrollpos) {
        window.document.getElementById("navbar").style.marginTop = "0";
        console.log(currentScrollpos);
      } else {
        window.document.getElementById("navbar").style.marginTop = "-100px";
      }
      prevScrollpos = currentScrollpos;
    };
  },
  components: {
    ContentBar,
    Footing,
    pageHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c2d2e2;

  background: #eceff1;
}
#navbarblock {
  min-width: 960px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow-y: scroll;
}
.container {
  min-width: 960px;
  max-width: 960px;
  margin-top: 160px;
  position: relative;
  padding: 0%;
  overflow: hidden;
}
#navbar {
  width: inherit;
  position: fixed;
  top: 20px;
  z-index: 999;
}
</style>
