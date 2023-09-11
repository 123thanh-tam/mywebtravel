<template>
  <div class="grid grid-cols-3 w-70% m-auto">
    <div class="col-span-2 px-4 border-r-1 border-gray-600">
      <h2 class="font-playfair text-gray-950 text-4xl mb-4">
        Once the home of an Italian duchess and sitting just 30 minutes north of
        Tulum, Hotel Esencia is Mexico like you see in postcards, with the
        perfect beach out front, a Yucatán jungle in the back and a
        hacienda-style home you can check into.
      </h2>
      <div>
        <p class="text-gray-500 tracking-1 mb-4">
          It’s a place that feels like a private hideaway, and for the longest
          time, this is what it was...the holiday home of an Italian duchess and
          later a getaway for celebrities from fashion photographers to models
          and chat-show hosts.There is just something so quiet
          <span id="more-text" class="hidden">
            and peaceful here; The hotel feels hidden from the world, sandwiched
            between jungle and beach and with lofty palm trees everywhere. The
            hotel also has a charming hacienda-style architecture with just 38
            suites and 3 villas, each a retreat that looks like something from
            the pages of a design magazine: Bright white and decked out in a
            curated collection of contemporary furniture and art. The design is
            neat and relaxing and the same is true of the swimming pools and the
            common areas and restaurants. There is the Beefbar Esencia in the
            Palm Garden, breezy Mistura with a sea-to-table experience and the
            two-storey Beach Bar right on the edge of the beach. The hotel is
            also home to a magical spa where several hot tubs are hidden away in
            niches and treatments draw on local Mayan traditions. For many, this
            is the best hotel on the Yucatán Peninsula...a home-away-from-home
            experience to bottle in the mind and come back to time and
            again.</span
          >
        </p>
        <p>{{ data1 }}</p>
        <button
          class="italic text-xs underline text-gray-700 font-playfair"
          id="show-btn"
          v-on:click="readmoreText"
        >
          Read more
        </button>
        <button
          class="italic text-xs underline hidden text-gray-700 font-playfair"
          id="hide-btn"
          v-on:click="readLessText"
        >
          Hide details
        </button>
      </div>
      <div class="mt-8 flex justify-start mb-7">
        <a href="#" class="text-gray-900 tracking-1 text-md mr-5 underline"
          >SPA</a
        >
        <a href="#" class="text-gray-900 tracking-1 text-md mr-5 underline"
          >OUTDOOR POOL</a
        >
        <a href="#" class="text-gray-900 tracking-1 text-md mr-5 underline"
          >TENNIS</a
        >
        <a href="#" class="text-gray-900 tracking-1 text-md mr-5 underline"
          >FITNESS</a
        >
        <a href="#" class="text-gray-900 tracking-1 text-md mr-5 underline"
          >KIDS CLUB</a
        >
      </div>
      <div class="bg-black cursor-pointer hover:opacity-70 w-32 text-center">
        <p class="text-white px-3 py-2">BOOK</p>
      </div>
    </div>
    <div class="ml-8">
      <h2 class="font-playfair text-gray-950 text-4xl">Join « Le Club »</h2>
      <p class="pb-7 italic font-playfair text-xs tracking-1 mt-3">
        As from your first booking
      </p>
      <div>
        <div class="flex">
          <div class="mr-4">
            <Icon
              icon="ic:round-check"
              class="text-white px-1 py-1 bg-black inline-block text-2xl rounded-full"
            />
          </div>
          <!-- <Icon icon="tabler:check" class="text-3xl" /> -->
          <span class="inline-block pb-9 text-gray-700"
            >Access to the best available rates</span
          >
        </div>
        <div class="flex">
          <div class="mr-4">
            <Icon
              icon="ic:round-check"
              class="text-white px-1 py-1 bg-black inline-block text-2xl rounded-full"
            />
          </div>
          <span class="inline-block pb-9 text-gray-700"
            >A dedicated Guest Experience Manager (GEM) to craft your
            itinerary</span
          >
        </div>
        <div class="flex">
          <div class="mr-4">
            <Icon
              icon="ic:round-check"
              class="text-white px-1 py-1 bg-black inline-block text-2xl rounded-full"
            />
          </div>
          <span class="inline-block pb-9 text-gray-700"
            >Room upgrades subject to availability at check-in</span
          >
        </div>
      </div>
      <div>
        <p class="pb-5 italic font-playfair text-xs tracking-1 mt-3">
          To discover your benefits:
        </p>
        <div class="mb-4">
          <a
            href="#"
            class="underline uppercase tracking-2 text-gray-900 text-md"
            >sign in</a
          >
          or
          <a
            href="#"
            class="underline uppercase tracking-2 text-gray-900 text-md"
          >
            Create an account</a
          >
        </div>
        <div>
          <a
            href="#"
            class="underline uppercase tracking-2 text-gray-900 text-md"
            >discover the benefits of "le club"</a
          >
        </div>
      </div>
      <div class="w-56 h-0.5 bg-slate-300 mt-11"></div>
      <h2 class="font-playfair text-gray-950 text-4xl mt-7">
        What makes the hotel special
      </h2>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "InforVue",
  data() {
    return {};
  },
  components: {
    Icon,
  },
  methods: {
    readmoreText() {
      let moreText = document.getElementById("more-text");
      let showBtn = document.getElementById("show-btn");
      let hideBtn = document.getElementById("hide-btn");
      moreText.classList.toggle("hidden"),
        showBtn.classList.toggle("hidden"),
        hideBtn.classList.toggle("hidden");
      return {
        moreText,
        showBtn,
        hideBtn,
      };
    },
    // readlessText() {
    //   this.moreText.classList.toggle("hidden");
    //   this.showBtn.classList.toggle("hidden");
    //   this.hideBtn.classList.toggle("hidden");
    // },
    readLessText() {
      let moreText = document.getElementById("more-text");
      let showBtn = document.getElementById("show-btn");
      let hideBtn = document.getElementById("hide-btn");
      moreText.classList.toggle("hidden"),
        showBtn.classList.toggle("hidden"),
        hideBtn.classList.toggle("hidden");
      return {
        moreText,
        showBtn,
        hideBtn,
      };
    },
  },
};
</script>
