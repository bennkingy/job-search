<template>
  <div>
    <MainNav />
    <Hero />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";

export default {
  name: "App",
  components: { MainNav, Hero },
};
</script>
