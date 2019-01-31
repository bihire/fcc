<template>
  <div>
    <div id="gaols" class="my-3">
      <weWillAimTo/>
    </div>

    <div id="gaols" class="my-3">
      <staffCodeOffConduct/>
    </div>

    <div id="gaols" class="my-3">
      <AdditionalValueServices/>
    </div>
  </div>
</template>
<script>
import WeWillAimTo from "./WeWillAimTo";
import StaffCodeOffConduct from "./StaffCodeOffConduct";
import AdditionalValueServices from "./AdditionalValueServices";
export default {
  components: {
    WeWillAimTo,
    StaffCodeOffConduct,
    AdditionalValueServices
  }
};
</script>
<style scoped>
#goals {
  background: #fff;
}
</style>
