<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-wrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="location" class="absolute left-0 -top-10">Role</label>
        <input
          type="text"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label for="location" class="absolute left-0 -top-10 ml-3"
          >Where?</label
        >
        <input
          type="text"
          placeholder="London"
          class="w-full text-lg font-normal focus:outline-none mr-3"
        />
      </div>

      <ActionButton
        text="search"
        type="secondary"
        class="rounded-r-3xl button-fix"
      />
    </div>
  </form>
</template>

<script>
import ActionButton from "@/components/ActionButton";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {};
  },
  computed: {
    actionClasses() {
      return {};
    },
  },
  created() {},
  beforeUnmount() {},
  methods: {},
};
</script>

<style scoped>
.button-fix {
  margin-top: -1px;
  margin-right: -1px;
}
</style>
