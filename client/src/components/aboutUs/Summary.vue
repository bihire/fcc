<template>
  <panel class="py-3 black--text">
    <div>
      <v-layout>
        <v-flex xs8>
          <div class="text-xs-left">
            <h2 class="title">EXECUTIVE SUMMARY</h2>
            <p class="body-1 py-3">
              FERRARI COURIER COMPANY Limited is a legally registered company in Kenya.
              Our location offers the desired level of leverage stemming from ease of access to business ports in East
              Africa, Asia, Asia-Pacific, Middle East & Europe.
            </p>

            <p class="body-1 py-3">
              We provide progressive, quality and efficient services to our clients in our extensive operation
              program primarily being a shipping and logistics company that offers a wide range of professional yet
              affordable services.
            </p>
          </div>
        </v-flex>
      </v-layout>
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
