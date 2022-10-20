<template>
  <section>
    <div class="container p-4 mx-auto mt-2 flex-container">
      <form @submit.prevent="handleSubmit()">
        <div class="w-64 mx-auto lg:w-1/2">
          <div class="flex flex-wrap mt-2">
            <div class="p-2 lg:w-1/2">
              <div v-for="field in BILLING_FIELDS">
                <BaseInputField
                  :inputId="field.inputId"
                  :label="field.label"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  v-model="field.inputId"
                />
              </div>
              Form data:
              <pre>{{ formData }}</pre>

              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                label="Address"
                v-model="formData.address"
                placeholder="Address"
                class="w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black"
                required
              />

              <label htmlFor="isPromoAllowed">Include promotional emails</label>
              <input
                type="checkbox"
                name="isPromoAllowed"
                id="isPromoAllowed"
              />

              <BaseButton type="submit">Submit</BaseButton>
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

import BaseButton from "@/components/UI/BaseButton.vue"
import BaseInputField from "@/components/UI/BaseInputField.vue"

import { BILLING_FIELDS } from "@/utils/constants/BILLING_FIELDS.js"

const handleSubmit = e => {
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
