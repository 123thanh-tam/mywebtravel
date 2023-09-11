<template>
  <!-- class="bg-no-repeat bg-cover bg-center h-700 mt-9 relative"
    data-carousel="slide" -->
  <div
    class="bg-suit-bg bg-no-repeat bg-cover bg-center h-700 mt-9 relative"
    data-carousel="slide"
  >
    <div
      class="bg-gradient-to-r from-stone-400 to-stone-700 absolute top-0 left-0 w-full h-700 opacity-50"
    ></div>
    <div class="w-60% m-auto absolute top-28 left-72">
      <div class="text-white flex justify-between">
        <h2 class="text-4xl font-playfair leading-10">
          Our selection of rooms and suites
        </h2>
        <div>
          <p
            class="uppercase px-6 py- 1 border-1 cursor-pointer border-white leading-10 font-bold hover:bg-black hover:transition hover:delay-150 hover:border-black"
          >
            visit the rooms
          </p>
        </div>
      </div>
      <div class="w-full h-0.5 bg-white mt-9"></div>
    </div>
    <div class="absolute bottom-36 left-72 text-white w-2/5">
      <h2 class="text-6xl font-playfair">Jungle Suite</h2>
      <p>
        95 sq.m / 1023 sq.ft, View: Jungle - Location: Close to the beach -
        Bathtub and shower in all rooms, Balcony or Terrace in some rooms
      </p>
      <div class="bg-black cursor-pointer hover:opacity-70 w-28 mt-5">
        <p class="text-white px-3 py-2 text-center font-bold">BOOK</p>
      </div>
    </div>
  </div>
</template>
<script>
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// // optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "SuitVue",
  components: {
    // VueSlickCarousel,
  },
  data() {
    return {
      // settings: {
      //   dots: true,
      //   dotsClass: "slick-dots custom-dot-class",
      //   edgeFriction: 0.35,
      //   infinite: false,
      //   speed: 500,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      // },
    };
  },
};
</script>
