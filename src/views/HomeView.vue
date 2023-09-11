<template>
  <div>
    <HeaderVue></HeaderVue>
    <MenuVue></MenuVue>
    <WhyVue></WhyVue>
    <InforVue></InforVue>
    <SuitVue></SuitVue>
    <HotelInfo></HotelInfo>
    <SignVue></SignVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import MenuVue from "../Item/MenuVue.vue";
import HeaderVue from "../layout/HeaderVue.vue";
import InforVue from "../layout/InforVue.vue";
import WhyVue from "../layout/WhyVue.vue";
import SuitVue from "@/layout/SuitVue.vue";
import HotelInfo from "@/layout/HotelInfo.vue";
import SignVue from "@/layout/SignVue.vue";
import FooterVue from "@/layout/FooterVue.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    HeaderVue,
    MenuVue,
    WhyVue,
    InforVue,
    SuitVue,
    HotelInfo,
    SignVue,
    FooterVue,
  },
};
</script>
