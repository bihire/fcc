<template>
  <div class="my-3">
    <div id="warehousing" class="my-3">
      <warehouse/>
    </div>
    <div id="warehousing" class="my-3">
      <CustomersBonded/>
    </div>
    <div id="warehousing" class="my-3">
      <InternationalForwading/>
    </div>
  </div>
</template>
<script>
import Warehouse from "./warehouse";
import CustomersBonded from "./CustomersBonded";
import InternationalForwading from "./InternationalForwading";
export default {
  components: {
    Warehouse,
    CustomersBonded,
    InternationalForwading
  }
};
</script>
