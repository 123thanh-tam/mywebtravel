<template>
  <div class="w-60% ml-303.8px mt-6 mb-6">
    <div class="border-b-1 w-full border-black">
      <h2 class="text-5xl mb-5">Hotel information</h2>
      <div class="flex justify-start">
        <div>
          <a
            href=""
            class="borderActive btn-menu uppercase mr-7 pb-6 text-md tracking-1 relative"
            @click="changeActive()"
            @blur="addClass()"
            >practice information
            <div
              class="w-full h-2px bg-black border-item absolute bottom-0"
            ></div>
          </a>
        </div>
        <a href="" class="uppercase mr-7 pb-6 text-md tracking-1 group relative"
          >restaurant & bar
          <div
            class="absolute bottom-0 group-hover:w-full group-hover:h-2px group-hover:bg-black border-item"
          ></div
        ></a>
        <a
          href=""
          class="btn-menu uppercase mr-7 pb-6 text-md tracking-1 group relative"
          @blur="addClass()"
          >spa & leisure
          <div
            class="absolute bottom-0 group-hover:w-full group-hover:h-2px group-hover:bg-black border-item"
          ></div
        ></a>
      </div>
      <!-- <div class="w-full h-0.5 bg-black"></div> -->
    </div>
    <DetailInfoVue></DetailInfoVue>
  </div>
</template>
<script>
import DetailInfoVue from "../Item/DetailInfo.vue";
export default {
  name: "HotelInfo",
  data() {
    return {};
  },
  components: {
    DetailInfoVue,
  },
  methods: {
    addClass() {
      let arr = document.getElementsByClassName("border-item");
      for (var i = 0; i <= arr.length; i++) {
        arr[i].classList.toggle("hidden");
      }
      return arr;
    },
  },
};
</script>
<style scoped></style>
