<template>
  <Panel class="py-3 black--text">
    <v-container fluid grid-list-md class="mt-0">
      <v-layout row wrap>
        <v-flex xs4 md4>
          <v-card class="elevation-4 transparent">
            <v-img class="white--text" height="100%" :src="images.sample3">
              
            </v-img>
          </v-card>
        </v-flex>
        <v-flex xs7>
          <v-layout row wrap>
            <v-img class="white--text" height="150px" width="400px" :src="images.sample">
              <v-container fill-height fluid class="grey--text">
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">CORPORATE PRINCIPLES</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-layout>
          <v-layout>
            <v-flex>
              <div class="text-xs-left">
                <p class="font-weight-light.font-italic body-2 py-1">
                  We have very high regard for customer service, a belief /virtue that is
                  unrivalled within the industry. We strongly believe that a customer
                  should be treated with utmost care and urgency. All staff and personnel
                  go through a training program that teaches many of the skills needed
                  for successful client relation and customer service.
                </p>

                <p class="font-weight-light.font-italic body-2 py-1">
                  FERRARI Courier LIMITED vast knowledge of the region, third party alliances and
                  connections enable us handle your logistics professionally and
                  expeditiously.
                </p>

                <p class="font-weight-light.font-italic subheading py-1">
                  Owning a dedicated cargo plane as per our freight partnership with
                  Kenya Airways and our very own ocean carrier; you can be rest assured
                  that your perishable, urgent, weighty, abnormal loads, precious goods,
                  delicate cargo among others would safely and timely be delivered to
                  your desired destinations.
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

        sample3: require("@/assets/images/shipping3.jpg")
      }
    };
  },
  components: {
    Panel
  }
};
</script>