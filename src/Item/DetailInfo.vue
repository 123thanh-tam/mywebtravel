<template>
  <div class="w-full m-auto mt-11 grid grid-cols-3 gap-5 mr-0">
    <div class="pl-4 border-l-1 border-gray-400">
      <h1 class="font-playfair text-2xl">Address</h1>
      <button class="flex">
        <div class="mr-2">
          <Icon icon="gg:pin" class="inline-block text-black" />
        </div>
        <span class="inline-block underline text-left"
          >Carretera Cancun-Tulum Km 265. Xpu-Ha, Tulum</span
        >
      </button>
    </div>
    <div class="pl-4 border-l-1 border-gray-400">
      <h1 class="font-playfair text-2xl">Internet</h1>
      <div>
        <span class="text-bold inline-block">Public area: </span>
        <span class="inline-block text-md text-gray-500">free</span>
      </div>
      <div>
        <span class="text-bold inline-block">In room: </span>
        <span class="inline-block text-md text-gray-500">free</span>
      </div>
    </div>
    <div class="pl-4 border-l-1 border-gray-400">
      <h1 class="font-playfair text-2xl">Children policy</h1>
      <div>
        <p class="text-gray-500">Children are welcome</p>
        <div>
          <span class="text-bold inline-block">Kids Club: </span>
          <span class="inline-block text-md text-gray-500">free</span>
        </div>
      </div>
    </div>
    <div class="pl-4 border-l-1 mt-5 border-gray-400">
      <h1 class="font-playfair text-2xl">Check-in/ Check-out</h1>
      <div>
        <span class="text-bold inline-block">Check-in: </span>
        <span class="inline-block text-md text-gray-500">3 pm</span>
      </div>
      <div>
        <span class="text-bold inline-block">Check-out </span>
        <span class="inline-block text-md text-gray-500">noon</span>
      </div>
    </div>
    <div class="pl-4 border-l-1 mt-5 border-gray-400">
      <h1 class="font-playfair text-2xl">Transportation</h1>
      <div>
        <span class="text-bold inline-block">Transfer : </span>
        <span class="inline-block text-md text-gray-500">
          subject to supplement</span
        >
      </div>
    </div>
    <div class="pl-4 border-l-1 mt-5 border-gray-400">
      <h1 class="font-playfair text-2xl">Smoking policy</h1>
      <p class="text-gray-500">Smoking public spaces</p>
      <div>
        <span class="text-bold inline-block">Smoking rooms : </span>
        <span class="inline-block text-md text-gray-500">not available</span>
      </div>
    </div>
    <div class="pl-4 border-l-1 mt-5 border-gray-400">
      <h1 class="font-playfair text-2xl">Rooms</h1>
      <p class="text-gray-500">47 rooms and suites</p>
      <div>
        <span class="text-bold inline-block">In-room amenities : </span>
        <span class="inline-block text-md text-gray-500"
          >iPod dock, flatscreen TV, in-room safe, minibar, coffee / tea making
          facilities, Cypres bathroom products</span
        >
      </div>
    </div>
    <div class="pl-4 border-l-1 mt-5 border-gray-400">
      <h1 class="font-playfair text-2xl">Always included in this hotel</h1>
      <p class="text-gray-500">Welcome drink, upon arrival</p>
      <p class="text-gray-500">Complimentary Internet</p>
      <p class="text-gray-500">Welcome gift</p>

      <p class="text-gray-500">
        Complimentary Mineral Water in the room upon arrival
      </p>
      <p class="text-gray-500">Continental breakfast for daily</p>
      <p class="text-gray-500">Yoga classes</p>
    </div>
    <div class="pl-4 border-l-1 mt-5 border-gray-400">
      <h1 class="font-playfair text-2xl">Smoking policy</h1>
      <p class="text-gray-500">Air conditional hotel</p>
      <p class="text-gray-500">Laundry service</p>
      <p class="text-gray-500">Concierge servive</p>
    </div>
    <div class="col-span-3 mt-7 w-36 m-auto">
      <div class="bg-black cursor-pointer hover:opacity-70">
        <p class="text-white px-3 py-2 text-center">BOOK</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "DetailInfo",
  components: {
    Icon,
  },
  data() {
    return {};
  },
};
</script>
