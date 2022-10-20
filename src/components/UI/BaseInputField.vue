<template>
  <label :htmlFor="props.inputId">{{ props.label }}</label>
  <input
    type="text"
    :name="props.inputId"
    :id="props.inputId"
    :label="props.label"
    :placeholder="props.placeholder"
    class="w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black"
    :required="props.required"
  />
</template>

<script setup>
// https://www.digitalocean.com/community/tutorials/how-to-add-v-model-support-to-custom-vue-js-components
// https://youtu.be/A0V6a8D1hFM?t=614
const props = defineProps([
  "inputId",
  "label",
  "placeholder",
  "required",
  "vmodel"
])
defineEmits(["vmodel"])
</script>
