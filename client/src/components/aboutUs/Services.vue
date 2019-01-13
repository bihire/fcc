<template>
  <panel class="py-3 black--text">
    <div>
      <v-layout>
        <v-flex xs12>
          <div class="text-xs-left">
            <h2 class="title">Our Range Of Services Include:</h2>
            <p class="body-1 py-3">
              <v-layout>
                <v-flex xs12 md4>
                  <ul type="circle">
                    <li>Import & Export Management</li>
                    <li>Shipping Services</li>
                    <li>Clearing & Forwarding</li>
                    <li>Warehousing</li>
                  </ul>
                </v-flex>

                <v-flex xs12 md4>
                  <ul type="circle">
                    <li>Haulage</li>
                    <li>Break bulk distribution & Supply Chain Management</li>
                    <li>General Distributors</li>
                  </ul>
                </v-flex>

                <v-flex xs12 md4>
                  <ul type="circle">
                    <li>Vehicle Hire</li>
                    <li>Tour & Travel</li>
                  </ul>
                </v-flex>
              </v-layout>
              <v-flex xs12 md4>
                <ul type="circle">
                  <li>Supply of Precious Metals (Gold, Diamond, Tanzanite among others)</li>
                  <li>Mining</li>
                </ul>
              </v-flex>
            </p>

            <p
              class="body-2 py-2"
            >FERRARI COURIER COMPANY Ltd has a highly competent board of directors and experienced staff.</p>

            <p
              class="body-2 py-2"
            >We have put in place a wide policy framework that assists to run the company along professional lines</p>

            <p class="body-2 py-2">
              We are committed to making a real difference by providing reliable solutions and employment to vibrant
              youths in the societies in which we operate.
            </p>

            <p class="body-2 py-2">
              In close association and partnership with subsidiaries, partners and third party alliances in the region and
              abroad, you can be sure that your cargo and/or any international logistical needs are in the most competent
              hands.
            </p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
          xs12
          md4
          mx-2
          align-center
          v-for="image in images"
          v-bind="{ [`xs${image.flex}`]: true }"
          :key="image.title"
        >
          <v-card class="elevation-4 transparent">
            <v-img class="white--text" height="100%" :src="image.sample">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">CORPORATE VISION</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
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
      images: [
        {
          title: "Pre-fab homes",
          sample: require("@/assets/images/samplephoto.jpg"),
          flex: 4
        },
        {
          title: "Best airlines",
          sample: require("@/assets/images/samplephoto2.jpg"),
          flex: 4
        },
        {
          title: "Favorite road trips",
          sample: require("@/assets/images/samplephoto3.jpg"),
          flex: 4
        }
      ]
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
