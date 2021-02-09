<template>
  <div class="flex flex-col items-center mx-auto text-center mt-56">
    <h1 class="text-6xl text-gray-700">{{ $t("hello") }},</h1>

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
        class="py-1 text-white px-3 bg-green-600 hover:bg-green-700 rounded"
      >
        Lietuvių
      </button>
    </nuxt-link>
  </div>
</template>