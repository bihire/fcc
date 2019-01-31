<template>
  <panel class="py-3 black--text">
    <div>
      <v-layout>
        <v-flex xs12>
          <div class="text-xs-left">
            <h2 class="red--text headline">WAREHOUSING,
              <br>STORAGE AND DISTRIBUTION
            </h2>
            <p class="body-1 py-3">
              For global supply chains, access to transportation capacity is an obvious requirement for your freight for warding company. However, if you want more from freight forwarding, Crane Logistics provides the shipment visibility and control that adds flexibility and efficiencies. With Crane Logistics, as your freight forwarder, you get in-country expertise and state-of-the-art technologies, as
              well as access to reliable transportation capacity. Your supply chain can react quickly to market demands while experiencing improved lead times. As one of the leading freight forwarders in the region, we offer premium services, which can stand alone or be an integrated solution for door-to-door services which can cover among others: Order Management - tracking from the time your order is placed with your supplier/manufacturer to the time it is ready for shipping
            </p>

            <v-layout ml-5>
              <v-flex>
                <div class="text-xs-left">
                  <div class="font-weight-bold body-1 py-1">
                    <ul type="square">
                      <li
                        class="my-2 subheading"
                      >Conventional Global shipping - Covering both Air and Sea.</li>
                      <li class="my-2 subheading">
                        Vessel / Airline Charters - This covers both bulk and special shipment bookings. Some of our Global
                        partners also operate own Charter vessels and Aircrafts
                      </li>
                      <li class="my-2 subheading">
                        Project Forwarding - Covers the comprehensive solutions including all the above and specialized logistics of
                        Out-of-Gauge and Oversized loads, packing and crating, physical inventory control and Site management
                        and logistics support
                      </li>
                      <li class="my-2 subheading">
                        Supply Chain Optimization - Covers supplier/vendor management, purchase order management,
                        consolidation services and multi-origin to multi-destination routing design
                      </li>
                      <li
                        class="my-2 subheading"
                      >Supply Chain Visibility - complete tracking and tracing of the entire supply chain to total service deliver</li>
                    </ul>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>

      <v-container mt-5 fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs7>
            <h2 class="red--text display-1 mb-5 text-xs-left">MARKET GROWTH:</h2>
            <v-layout mt-5>
              <v-flex>
                <div class="text-xs-left">
                  <div class="body-1 py-1">
                    <p>
                      The market for highly reliable, efficient reasonably priced cargo
                      handlers has been growing at a rate of 6.7% since 1996, the same
                      demand not being matched by an proportionate increase in such
                      providers, a gap we came in to fill.
                    </p>
                  </div>
                </div>
              </v-flex>
            </v-layout>
            <v-layout mt-3 row wrap>
              <v-img class="white--text" height="200px" width="400px" :src="image.sample">
                <v-container fill-height fluid class="white--text">
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox class="headline text-xs-center">
                      <span>CORPORATE PRINCIPLES</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-layout>
          </v-flex>

          <v-flex class="text-xs-left" xs4 md4>
            <v-card class="elevation-4 transparent">
              <v-img class="white--text" height="400" :src="image.sample3">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">CORPORATE PRINCIPLES</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
      ],
      image: {
        sample: require("@/assets/images/timo-wagner-677183-unsplash.jpg"),
        sample2: require("@/assets/images/shipping.jpg"),
        sample3: require("@/assets/images/joao-silas-72562-unsplash.jpg"),
        sample4: require("@/assets/images/ban-yido-536186-unsplash.jpg")
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
