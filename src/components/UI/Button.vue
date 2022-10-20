<template>
  <button
    class="px-4 py-2 font-bold bg-white border border-gray-400 border-solid rounded hover:bg-gray-400"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps(["text"])
</script>
