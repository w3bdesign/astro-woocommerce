<template>
  This is a form:

  <section>
    <div class="container p-4 mx-auto mt-2 flex-container">
      <form @submit="handleSubmit()">
        <div class="w-64 mx-auto lg:w-1/2">
          <div class="flex flex-wrap mt-2">
            <div class="p-2 lg:w-1/2">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                label="First name"
                v-model="formData.firstName"
                placeholder="First name"
                required
              />

              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />

              <label htmlFor="isPromoAllowed">Include promotional emails</label>
              <input
                type="checkbox"
                name="isPromoAllowed"
                id="isPromoAllowed"
              />

              <button type="submit">Sign me up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
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
