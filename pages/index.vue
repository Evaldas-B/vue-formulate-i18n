<template>
  <div class="flex flex-col items-center mx-auto text-center mt-56">
    <h1 class="text-6xl text-gray-700">{{ $t("hello") }}, {{ name }}</h1>

    <span class="mt-5 text-lg">Languages: </span>

    <nuxt-link :to="switchLocalePath('en')">
      <button
        class="my-5 py-1 text-white px-3 bg-green-600 hover:bg-green-700 rounded"
      >
        English
      </button>
    </nuxt-link>

    <nuxt-link :to="switchLocalePath('lt')">
      <button
        class="mb-5 py-1 text-white px-3 bg-green-600 hover:bg-green-700 rounded"
      >
        Lietuvių
      </button>
    </nuxt-link>

    <formulate-input
      type="text"
      label="What is your name?"
      validation="required"
      input-class="border border-gray-400 rounded px-3 py-2 leading-none focus:border-green-500 outline-none border-box w-full mb-1"
      error-class="text-sm text-red-700"
      v-model="name"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: null,
    };
  },
};
</script>