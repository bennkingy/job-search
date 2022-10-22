<template>
  <img
    v-if="imageLink"
    :src="imageLink"
    class="w-8 h-8 object-contain"
    alt=""
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://media.defense.gov/2020/Oct/25/2002523049/-1/-1/0/201025-M-AB981-003.JPG",
    };
  },
};
</script>
