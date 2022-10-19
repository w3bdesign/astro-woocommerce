<template>
  This is Formkit form:

</template>

<script setup>
// https://stackoverflow.com/questions/73498637/how-to-add-vuetify-to-astro

import { reactive } from "vue"

import {FormKit} from "@formkit/vue"

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
