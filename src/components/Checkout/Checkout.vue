<template>
  <section>
    <div class="container p-4 mx-auto mt-2 flex-container">
      <form @submit.prevent="handleSubmit()">
        <div class="w-64 mx-auto lg:w-1/2">
          <div class="flex flex-wrap mt-2">
            <div class="p-2 lg:w-1/2">
              <div v-for="(field, index) in BILLING_FIELDS">
                <BaseInputField
                  :inputId="field.inputId"
                  :label="field.label"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  v-model="comment"
                />
              </div>
              Comment data:
              <pre>{{ comment && JSON.stringify(comment) }}</pre>

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

// https://laracasts.com/series/learn-vue-3-step-by-step

import { reactive, ref } from "vue"

import BaseButton from "@/components/UI/BaseButton.vue"
import BaseInputField from "@/components/UI/BaseInputField.vue"

import { BILLING_FIELDS } from "@/utils/constants/BILLING_FIELDS.js"

const handleSubmit = () => {
  alert("Submit")
}

let formData = reactive({})

//const formData = ref("test")

let comment = ref("initial textarea value")

/*const formData = reactive({
  firstName: "",
  lastName: "",
  address: "",
  zipcode: "",
  city: "",
  state: "",
  email: ""
})*/
</script>
