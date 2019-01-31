<template>
  <panel>
    <section class="my-5">
      <v-layout column wrap align-left>
        <v-flex xs12 sm4 class="mb-3">
          <div class="text-xs-left">
            <h2 class="display-2 font-weight-thin black--text">The best way to start developing</h2>
            <span class="headline teal--text">Our Principles</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl class="bro">
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="transparent">
                  <v-img class="white--text" height="300" :src="images.sample4">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">CORPORATE VISION</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                  <v-card-text>
                    Moving forward, our Vision
                    is to be one of the leading,
                    most efficient and reliable
                    logistics provider across the
                    Indian Ocean.
                  </v-card-text>
                </v-card>
              </v-flex>

              <!-- <v-flex xs12 md4>
                <v-card class="elevation-4 transparent justify-top">
                  <v-img class="white--text" height="300" :src="images.sample">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">MISSION STATEMENT</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                  <v-card-text>Our mission is to ensure long-term sustaining by harmonizing the needs of our client's customers and suppliers and shareholders
                    while ensuring that they are able to attract, retain, develop and deploy people with energy, passion and skills.
                  </v-card-text>
                </v-card>
              </v-flex>-->
              <v-flex xs12 md4>
                <v-card class="transparent">
                  <v-img class="white--text" height="300" :src="images.sample1">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">OUR VALUES</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                  <v-card-text>Integrity of proffessionalism, transparency,Responsability, Uniqueness in approach.</v-card-text>
                </v-card>
              </v-flex>

              <v-flex xs12 md4>
                <v-card class="transparent">
                  <v-img class="white--text" height="300" :src="images.sample3">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">CORPORATE PRINCIPLES</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                  <v-card-text>
                    Sustainability,
                    innovation,
                    Comprhensiveness,
                    CostEfficiancy,
                    safety,
                    customization,
                    Customer satisfaction.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </panel>
</template>
<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      images: {
        sample: require("@/assets/images/shipping1.jpg"),
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
<style scoped>
.bro {
  margin-left: -22px;
}
</style>
