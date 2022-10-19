<template>
    Formkit form: 
  <form-kit type="form" @submit="submitHandler" :actions="false">
    <form-kit
      type="text"
      name="firstName"
      label="First name"
      v-model="formData.firstName"
      validation="required|alpha|length:3"
      validation-visibility="live"
      placeholder="First name"
    />
  </form-kit>
</template>

<script setup>
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
