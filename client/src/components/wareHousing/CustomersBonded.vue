<template>
  <panel class="purple darken-3 py-5 white--text">
    <div>
      <v-layout>
        <v-flex xs10>
          <div class="text-xs-left">
            <div class="headline">
              CUSTOMS BONDED
              WAREHOUSING AND STORAGE
            </div>
            <p class="body-2 py-3">
              We can find any size of storage facility you may require in any location. We have long term contracts with a
              number of warehouse owners with good reputation. Our warehousing partners operate both customs bonded and
              cus-toms free warehouses to support your warehousing needs and in the not so distant future, we shall be happy to
              host you at one of our logistics complexes currently under development.
              Goods Declaration;.
            </p>

            <div class="bro">WE ARE GLAD TO OFFER YOU:</div>
            <p class="body-1 py-3">
              <v-layout>
                <v-flex xs12 md6 ml-5>
                  <ul>
                    <li class="my-2">Representation during cargo inspection</li>
                    <li
                      class="my-2"
                    >Processing of customs documentation (SAD) for imports, exports or transit</li>
                  </ul>
                </v-flex>

                <v-flex xs12 md6>
                  <ul>
                    <li class="my-2">Representation at customs processing centers</li>
                    <li class="my-2">
                      Guarantees and bonds and favorable costs for all
                      your customs needs
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <div class="img elevation-2">
          <img src="../../assets/images/automotive-cars-expressway-172074.jpg" alt>
        </div>
      </v-layout>
    </div>
  </panel>
</template>
<script>
import Panel from "@/components/Panel";
export default {
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
.bro {
  font-family: "Merriweather", serif;
  font-family: "Libre Barcode 128 Text", cursive;

  font-size: 48px;
}
</style>
