<template>
  <div>
    <panel class="px-3 pt-4">
      <div class="font-weight-thin title text-xs-left red--text">
        <h1>complex projects</h1>
      </div>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs6>
            <v-layout class="mb-4">
              <v-card class="elevation-4 transparent">
                <v-img class="white--text" height="100%" :src="images.sample1">
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
          <v-flex xs5 ml-2>
            <v-layout class="mb-4">
              <v-card class="elevation-4 transparent">
                <v-img class="white--text" height="250px" :src="images.sample1">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex align-center>
                        <span class="headline">CORPORATE PRINCIPLES</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
              </v-card>
            </v-layout>
            <v-layout>
              <v-card class="elevation-4 transparent">
                <v-img class="white--text" height="100%" :src="images.sample3">
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
        </v-layout>
      </v-container>
    </panel>
  </div>
</template>
<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      images: {
        sample: require("@/assets/images/lights.jpg"),
        sample1: require("@/assets/images/joakim.jpg"),
        sample3: require("@/assets/images/juan.jpg"),
        sample4: require("@/assets/images/shipping4.jpg")
      }
    };
  },
  components: {
    Panel
  }
};
</script>
