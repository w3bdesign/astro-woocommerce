<template>
  <a href="/checkout">
    <button
      class="w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800 ease-in-out duration-300"
      :type="props.type"
    >
      Checkout
    </button>
  </a>
</template>

<script setup>
const props = defineProps(["type"])
</script>
