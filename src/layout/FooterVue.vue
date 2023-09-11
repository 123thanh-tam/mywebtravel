<template>
  <div class="bg-stone-900 pt-14 pb-3 text-white">
    <div class="w-4/5 m-auto">
      <div class="grid grid-cols-5">
        <div class="col-span-2">
          <img
            src="https://res.cloudinary.com/grand-luxury/image/upload/w_240,q_50,f_auto,c_fill,g_center,dpr_1/Logo/LARTISIEN_LOGO_HOMEPAGE_0"
            alt=""
            class="h-9"
          />
        </div>
        <div>
          <h6 class="text-xl font-playfair mb-4">Get to know us</h6>
          <p class="uppercase tracking-1 text-sm pb-2">our talent</p>
          <p class="uppercase tracking-1 text-sm pb-2">
            the lartisien difference
          </p>
          <p class="uppercase tracking-1 text-sm pb-2">the magazine</p>
          <p class="uppercase tracking-1 text-sm pb-2">le club</p>
        </div>
        <div>
          <h6 class="text-xl font-playfair mb-4">Let us help you</h6>
          <p class="uppercase tracking-1 text-sm pb-2">contact us</p>
          <p class="uppercase tracking-1 text-sm pb-2">help</p>
          <p class="uppercase tracking-1 text-sm pb-2">term & conditions</p>
          <p class="uppercase tracking-1 text-sm pb-2">privacy policy</p>
        </div>
      </div>
      <div class="w-full h-0.5 bg-white my-9"></div>
      <div class="grid grid-cols-3">
        <div class="flex">
          <div class="flex mr-8">
            <Icon icon="ic:baseline-phone" class="mt-4px mr-4px" />
            <span>+44 20 3519 2700</span>
          </div>
          <div class="mr-8 pb-3 hover:border-b-1 hover:border-white">
            <select name="language" class="bg-stone-900 outline-none">
              <option selected value="English">English</option>
              <option value="VN">VN</option>
            </select>
          </div>
          <div class="pb-3 hover:border-b-1 hover:border-white">
            <select name="money" class="bg-stone-900">
              <option selected value="English">VND</option>
              <option value="VN">Dollar</option>
              <option value="euro">Euro</option>
            </select>
          </div>
        </div>
        <div>
          <img
            src="https://www.lartisien.com/_next/image?url=%2Fstatic%2Fimg%2FIATA.png&w=48&q=50"
            alt=""
            class="ml-60"
          />
        </div>
        <div class="">
          <div class="flex justify-end">
            <Icon icon="mdi:instagram" class="text-2xl mr-8 inline-block" />
            <Icon icon="fa:youtube" class="mr-8 text-2xl" />
            <Icon icon="gg:facebook" class="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
  data() {
    return {};
  },
};
</script>
