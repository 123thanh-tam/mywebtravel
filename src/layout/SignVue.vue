<template>
  <div class="my-36 relative">
    <img
      src="https://www.ikea.com/images/leafy-plants-and-outdoor-furniture-on-a-bright-spacious-wall-ece69ea65ac71d8a57786d9e75782be6.jpg"
      class="w-full h-800"
      alt=""
    />
    <Signup class="absolute top-55- left-20"></Signup>
  </div>
</template>
<script>
import Signup from "@/Item/Signup.vue";
export default {
  name: "SignVue",
  data() {
    return {};
  },
  components: {
    Signup,
  },
};
</script>
