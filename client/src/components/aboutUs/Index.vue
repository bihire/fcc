<template>
  <div class="aboutUs">
    <div class="img">
      <img src="../../assets/images/josh.jpg" alt>
    </div>

    <div id="summary" class="my-4">
      <Summary/>
    </div>

    <div id="services" class="my-4">
      <Services/>
    </div>

    <div id="products&services" class="my-4">
      <ProductsServices/>
    </div>

    <div id="competitiveEdge" class="my-4">
      <CompetitiveEdge/>
    </div>

    <div id="ServicesOffered" class="my-4">
      <ServicesOffered/>
    </div>

    <div id="complexProjects" class="my-4">
      <ComplexProjects/>
    </div>

    <div id="PreciusMetalworks" class="my-4">
      <PreciusMetalworks/>
    </div>
  </div>
</template>
<script>
import Summary from "./Summary";
import Services from "./Services";
import ProductsServices from "./ProductsServices";
import CompetitiveEdge from "./CompetitiveEdge";
import ServicesOffered from "./ServicesOffered";
import ComplexProjects from "./ComplexProjects";
import PreciusMetalworks from "./PreciusMetalworks";
export default {
  components: {
    Summary,
    Services,
    ProductsServices,
    CompetitiveEdge,
    ServicesOffered,
    ComplexProjects,
    PreciusMetalworks
  }
};
</script>
