<template>This is Formkit form:</template>

<script setup>
// https://github.com/bholmesdev/astro-zod-form-demo/blob/main/src/components/Form.tsx

import { reactive } from "vue"

const formData = reactive({
  firstName: "",
  lastName: "",
  address: "",
  zipcode: "",
  city: "",
  state: "",
  email: ""
})
</script>
