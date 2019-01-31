<template>
  <panel class="py-3 black--text">
    <div>
      <v-layout>
        <v-flex xs12>
          <div class="text-xs-left">
            <h2 class="display-1">WAREHOUSING,
              <br>STORAGE AND DISTRIBUTION
            </h2>

            <p class="body-2 py-2">
              Through our sister companies, we are able to manage any free warehouse of your requirement for long term, non
              customs bonded storage needs. As a 4PL logistics provider, we can for the moment provide warehouse for non
              hazardous goods be it palletized, containers, motor vehicles, machinery and many other items.
            </p>

            <p class="subheading py-2">
              Through our distribution and trucking units, we can also complete distribution for any goods in our hold. Our
              ser-vices then cover:
            </p>
            <p class="body-1 py-3">
              <v-layout>
                <v-flex xs12 md4>
                  <ul type>
                    <li>Order fulfillment, by piece, case, and pallet selection</li>
                    <li>Cross Dock Services FTL/LTL</li>
                    <li>Small parcel receiving and handling</li>
                  </ul>
                </v-flex>

                <v-flex xs12 md4>
                  <ul type>
                    <li>Reverse logistics program</li>
                    <li>24-Hour secure facility</li>
                    <li>After-hours and weekend services</li>
                  </ul>
                </v-flex>

                <v-flex xs12 md4>
                  <ul type>
                    <li>Freight Forwarding Services</li>
                    <li>Container loading and unloading</li>
                    <li>Freight consolidation</li>
                    <li>Co-load trans-border services</li>
                  </ul>
                </v-flex>
              </v-layout>
            </p>
          </div>
          <v-layout>
            <div class="img">
              <img src="../../assets/images/samuel-zeller-118195-unsplash.jpg" alt>
            </div>
          </v-layout>
          <div class="text-xs-left">
            <p class="body-2 py-2">
              No matter your location, we will find a warehousing solution that works for you! Let our specialists assist you
              in providing a program that best fits your warehouse and distribution needs.
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