<template>
  <panel class="py-3 black--text">
    <div>
      <v-layout>
        <v-flex xs4>
          <div class="text-xs-left">
            <h2
              class="title"
            >FERRARI COURIER COMPANY makes it easier than ever for you to ship online</h2>
            <p
              class="body-1 py-3"
            >FCC is the leader in global express shipping. With MyFCC you have access to our easy-to-use, free online shipping and tracking services—all customized to your preferences. Our solution is ideal for occasional shippers, small and medium business with regular shipping needs or larger volume business to business shippers.</p>
          </div>
        </v-flex>
        <v-flex xs8>
          <img :src="images.summary" class="album-image">
        </v-flex>
      </v-layout>
    </div>

    <div class="black white--text" height="300" dark row wrap>
      <div class="content">
        <div>
          <h1 class="font-weight-light headline my-3">SPORTLIGHT</h1>
        </div>
        <div>
          <h2 class="font-weight-light body-2">BUSINESS DISRUPTION MEASURE</h2>
        </div>
        <div>
          <v-btn outline color="white">INSURENCE</v-btn>
          <v-btn outline color="white">RETAIL</v-btn>
          <v-btn outline color="white">HEALTH CARE</v-btn>
        </div>
      </div>
    </div>
  </panel>
</template>
<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      images: {
        summary: require("@/assets/images/summaryphoto.jpg")
      }
    };
  },
  components: {
    Panel
  }
};
</script>
<style scoped>
.black {
  background: black;
  height: 200px;
  background: url(../../assets/images/stefan-cosma-399670-unsplash.jpg);
  background-size: cover;
}

.content {
  width: 100%;
  height: inherit;
  background: inherit;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
}

.content::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  box-shadow: inset 0 0 3000px rgba(255, 255, 255, 0.5);
  filter: blur(10px);
  margin: -20px;
}

.song {
  padding: 20px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 14px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
