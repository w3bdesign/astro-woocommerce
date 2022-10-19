<template>
  This is a form:

  <form @submit="handleSubmit()">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" required />

    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />

    <label htmlFor="isPromoAllowed">Include promotional emails</label>
    <input type="checkbox" name="isPromoAllowed" id="isPromoAllowed" />

    <button type="submit">Sign me up</button>
  </form>
</template>

<script setup>
// https://github.com/bholmesdev/astro-zod-form-demo/blob/main/src/components/Form.tsx

import { reactive } from "vue"

const handleSubmit = () => {
  alert("Submit")
}

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
