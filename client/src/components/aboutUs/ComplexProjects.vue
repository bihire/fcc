<template>
  <div class="mt-0">
    <panel class="px-3 pt-4">
      <div class="font-weight-thin title text-xs-left black--text">
        <h1>Complex projects</h1>
      </div>

      <v-layout row wrap mt-5>
        <v-flex xs6 class="bro">
          <!-- <v-img class="white--text text-xs-center" height="100%" :src="images.sample1">
              <v-container fill-height>
                <v-layout fill-height>
                  <v-flex xs12 align-left flexbox>
                    <span class="headline">CORPORATE PRINCIPLES</span>
                  </v-flex>
                </v-layout>
              </v-container>
          </v-img>-->
          <v-layout style="margin: auto;" mx-4 mt-2>
            <v-card color="white darken-2" style="opacity: 0.8;" class="black--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>

          <v-layout width="50px" style="margin: auto;" mx-4 mt-2>
            <v-card color="white darken-2" style="opacity: 0.8;" class="black--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>

          <v-layout width="50px" style="margin: auto;" mx-4 mt-2>
            <v-card color="white darken-2" style="opacity: 0.8;" class="black--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>
        </v-flex>
        <v-flex xs5 ml-2>
          <v-layout class="mb-4">
            <v-img class="white--text" height="250px" :src="images.sample1">
              <!-- <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex align-center>
                      <span class="headline">CORPORATE PRINCIPLES</span>
                    </v-flex>
                  </v-layout>
              </v-container>-->
            </v-img>
          </v-layout>
          <v-layout>
            <v-img class="white--text" height="100%" :src="images.sample3">
              <!-- <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">CORPORATE PRINCIPLES</span>
                    </v-flex>
                  </v-layout>
              </v-container>-->
            </v-img>
          </v-layout>
        </v-flex>
      </v-layout>
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
<style scoped>
.bro {
  background: url("../../assets/images/joakim.jpg");
}
</style>
