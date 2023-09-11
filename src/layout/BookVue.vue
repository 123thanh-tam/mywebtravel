<template>
  <div class="grid grid-cols-5 w-2/3 m-auto text-center shadow-0xl">
    <div
      class="col-span-2 text-left px-3 py-2 border-1 border-gray-800 border-r-0"
    >
      <Icon icon="basil:search-outline" class="inline-block mr-3" />
      <p class="inline-block">Hotel Esencia - Tulum, Mexico</p>
    </div>
    <div class="px-3 py-2 border-1 border-gray-800 border-r-0">
      <Icon icon="carbon:calendar" class="inline-block mr-3" />
      <p class="inline-block">Arrival - Departure</p>
    </div>
    <div class="px-3 py-2 border-1 border-gray-800">
      <Icon icon="bx:user" class="inline-block mr-3" />
      <p class="inline-block">2 adults</p>
    </div>
    <div class="bg-black cursor-pointer hover:opacity-70">
      <p class="text-white px-3 py-2">BOOK</p>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "BookVue",
  data() {
    return {};
  },
  components: {
    Icon,
  },
};
</script>
