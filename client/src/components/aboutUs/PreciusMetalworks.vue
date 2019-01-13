<template>
  <panel class="py-3 black--text">
    <div>
      <v-layout>
        <v-flex xs12>
          <div class="text-xs-left">
            <h2 class="title ml-5">WE ARE ABLE TO OFFER:</h2>
            <p class="body-1 py-3">
              <v-layout>
                <v-flex xs12 md6 ml-5>
                  <ul>
                    <li
                      class="my-2"
                    >&#10148; Operations sites logistics solutions taking over entire logistics requirements from Transport, lifting, support vehicle to provision of competent personnel among others</li>
                    <li class="my-2">&#10148; Vessel Chattering</li>
                  </ul>
                </v-flex>

                <v-flex xs12 md6>
                  <ul>
                    <li class="my-2">&#10148; Aircraft Chattering</li>
                    <li class="my-2">&#10148; Complex lifting operations management</li>
                    <li class="my-2">&#10148; Remote locations logistics support</li>
                    <li class="my-2">&#10148; On-the-road recovery and maintenance support</li>
                    <li class="my-2">&#10148; Day and night operations logisticst support</li>
                  </ul>
                </v-flex>
              </v-layout>
            </p>

            <p class="body-2 py-2">
              With consulting, planning, preparation and execution capabilities in the same hands, we can
              offer a fully integrated service and bespoke solution ensuring that we meet your exact
              requirements at a cost effective price.
            </p>
          </div>
        </v-flex>
      </v-layout>

      <v-parallax height="300" :src="require('@/assets/images/timo-wagner-677183-unsplash.jpg')">
        <v-layout align-center column justify-center>
          <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-layout>
      </v-parallax>

      <v-container mt-5 fluid grid-list-md>
        <v-layout row wrap>
          <v-flex class="text-xs-left" xs4 md4>
            <h2 class="red--text title mb-5">SERVICES OVERVIEW:</h2>
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
          <v-flex xs7>
            <v-layout mt-5>
              <v-flex>
                <div class="text-xs-left">
                  <div class="font-weight-bold body-1 py-1">
                    <ul>
                      <li class="my-2">Experienced management</li>
                      <li class="my-2">Continuous and close flow of communication</li>
                      <li class="my-2">Rapid response to emergency situations</li>
                      <li class="my-2">Close understanding of international transportation services</li>
                      <li class="my-2">Flexibility to adjust with the customers’ needs at any stage</li>

                      <li class="my-2">Cargo tracking and documentation systems</li>
                      <li class="my-2">
                        Quality assurance programs designed to meet the contract
                        requirements
                      </li>
                      <li class="my-2">Door-to-door transportation services</li>
                    </ul>
                  </div>
                </div>
              </v-flex>
            </v-layout>
            <v-layout mt-3 row wrap>
              <v-img class="white--text" height="150px" width="400px" :src="image.sample">
                <v-container fill-height fluid class="grey--text">
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">CORPORATE PRINCIPLES</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs8>
            <v-layout mt-5>
              <v-flex>
                <div class="text-xs-left">
                  <h2 class="red--text title mb-5">CUSTOMS BROKERAGE</h2>
                  <div class="font-weight-light body-1 py-1">
                    <p>
                      Our proven customs brokerage and trade experience makes us one of the best
                      providers to turn to when you have the easy or complex customs support. Our
                      solutions can sup-port both your local and global customs requirements to precision
                      with one of a kind customs advisory service.
                    </p>

                    <p>
                      Our experienced customs brokers will ensure prompt and professional customs
                      clearance for all your requirements, handle all your customs documentation and
                      ensure complete representation at all customs posts. Our understanding of the
                      intricate African customs regulations will not only save you valuable time but money
                      too.
                    </p>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex class="text-xs-left" xs2 md4>
            <v-card class="elevation-4 transparent">
              <v-img class="white--text" height="400" width="200" :src="image.sample4"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container mt-5 fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs8>
            <v-layout mt-5>
              <v-flex>
                <div class="text-xs-left">
                  <h1 class="font-weight-bold black--text display-1 mb-5">INLAND
                    <br>TRANSPORT AND HAULAGE
                  </h1>
                  <div class="font-weight-light body-2 py-1">
                    <p>
                      We are in a position to organize all conventional and non-conventional haulage both at source (through our
                      global partners) and at destination (with our own fleet) or by national and regional rail infrastructure (where
                      available). Our Just-in-Time (JIT) approach will ensure your goods are where you need them each time, thus
                      ensuring minimal costs for storage requirements and thereby adding value to your business. Our commitment
                      and service offering includes:
                    </p>

                    <v-layout ml-5>
                      <v-flex>
                        <div class="text-xs-left">
                          <div class="font-weight-bold body-1 py-1">
                            <ul>
                              <li class="my-2">Multi-model transport solutions</li>
                              <li class="my-2">Specialized transportation</li>
                              <li class="my-2">Quality Transport outsourcing and management</li>
                              <li class="my-2">Timely pickup and delivery</li>
                            </ul>
                          </div>
                        </div>
                      </v-flex>
                    </v-layout>
                  </div>
                </div>
              </v-flex>
            </v-layout>
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
          sample1: require("@/assets/images/timo-wagner-677183-unsplash.jpg"),
          flex: 4
        },
        { sample: require("@/assets/images/lights.jpg") },
        { sample2: require("@/assets/images/shipping.jpg") },
        { sample3: require("@/assets/images/shipping3.jpg") },
        { sample4: require("@/assets/images/shipping4.jpg") }
      ],
      image: {
        sample: require("@/assets/images/cyber-security-cybersecurity-device-60504.jpg"),
        sample2: require("@/assets/images/shipping.jpg"),
        sample3: require("@/assets/images/asphalt-car-clear-sky-192364.jpg"),
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
