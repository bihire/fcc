<template>
  <Panel class="py-3 black--text">
    <v-container fluid grid-list-md class="mt-0">
      <v-layout row wrap>
        <v-flex xs5 md4>
          <v-layout class="mb-4">
            <v-card class="elevation-4 transparent">
              <v-img class="white--text" height="250px" :src="images.sample3">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">CORPORATE PRINCIPLES</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-layout>
          <v-layout>
            <v-card class="elevation-4 transparent">
              <v-img class="white--text" height="250px" :src="images.sample3">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">CORPORATE PRINCIPLES</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-layout>
        </v-flex>
        <v-flex xs7 ml-2>
          <v-layout class="purple darken-3 px-3 py-4">
            <v-flex>
              <div class="text-xs-left white--text">
                <h2 class="title py-3">SERVICES/SOLUTIONS OFFERED:</h2>
                <h2 class="title py-3">TURNKEY PROJECT TRANSPORT LOGISTICS</h2>
                <p class="font-weight-light.font-italic subheading py-1">
                  A specialty for the Projects Division, the movement of oversized and unusual cargo requires special handling,
                  expertise, chartering of vessels/ aircraft and heavy lift
                  services and eventual delivery by sea, air, road or rail.
                </p>

                <p class="font-weight-light.font-italic subheading py-1">
                  Our Projects division has developed sufficient capacity to
                  size any type of project in any location. With an own
                  arsenal of specialized ocean carriers, trailers, cranes,
                  forklifts, other lifting gear etc all totaling to over 70
                  equipment, this unit is well equipped to handle any type of
                  job.
                </p>

                <p class="font-weight-light.font-italic subheading py-1">
                  Our crews are fully trained, qualified and certified to the
                  British Standards (BS system) and this applies to our various
                  equip-ments that require these standards.
                  Equipped with all this, we have the pleasure the serve a
                  num-ber of complex projects such as:
                </p>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </Panel>
</template>
<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      images: {
        sample: require("@/assets/images/lights.jpg"),
        sample1: require("@/assets/images/shipping.jpg"),
        sample3: require("@/assets/images/shipping3.jpg"),
        sample4: require("@/assets/images/shipping4.jpg")
      }
    };
  },
  components: {
    Panel
  }
};
</script>