<template>
  <v-footer width="100%" height="auto">
    <v-card flat tile class="indigo lighten-1 white--text text-xs-center">
      <v-layout>
        <v-flex xs6>
          <v-card-text class="white--text pt-0">FERRARI COURIER COMPANY
            <br>P.O BOX 60027,
            <br>35 wood avenue,
            <br>blessings lane #1,
            <br>Apt 04, Freetown, Sierra Leone, west Africa
          </v-card-text>
        </v-flex>
        <v-flex xs6>
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>
