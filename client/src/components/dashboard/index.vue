<template>
  <div>
    <div id="helloworld">
      <helloworld/>
    </div>

    <div id="summary" class="my-4">
      <Summary/>
    </div>

    <div id="ourPrinciples" class="my-4">
      <ourprinciples/>
    </div>
    <div id="footer" class="mt-4 mb-2">
      <footer/>
    </div>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Helloworld from "./Helloworld";
import Ourprinciples from "./Ourprinciples";
import Summary from "./Summary";
export default {
  components: {
    Helloworld,
    Ourprinciples,
    Footer,
    Summary
  }
};
</script>
<style scoped>
#helloworld {
  border: 1px solid black;
}
#footer {
  background: black;
}
</style>
