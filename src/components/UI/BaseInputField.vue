<template>
  <label :htmlFor="props.inputId">{{ props.label }}</label>
  <input
    type="text"
    :name="props.inputId"
    :id="props.inputId"
    :placeholder="props.label"
    class="w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black"
    :required="props.required"
    @input="emit('update:modelValue', $event.target.value)"
    v-text="modelValue"
  />
</template>

<script setup>
// https://youtu.be/A0V6a8D1hFM?t=614
const props = defineProps(["inputId", "label", "required", "modelValue"])

const emit = defineEmits(["update:modelValue"])
</script>
