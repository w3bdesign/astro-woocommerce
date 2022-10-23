<template>
  <section>
    <div class="container p-4 mx-auto mt-2 flex-container">
      <form @submit.prevent="handleSubmit(event)">
        <div class="w-64 mx-auto lg:w-1/2">
          <div class="flex flex-wrap mt-2">
            <div class="p-2 lg:w-1/2">
              <div v-for="field in BILLING_FIELDS">
                <BaseInputField
                  :inputId="field.inputId"
                  :label="field.label"
                  :required="field.required"
                  v-model="formData[field.inputId]"
                />
              </div>
              formData data:
              <pre>{{ formData && JSON.stringify(formData) }}</pre>
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

import { ref, reactive } from "vue"
import { useVuelidate } from "@vuelidate/core"
import { required } from "@vuelidate/validators"

import BaseButton from "@/components/UI/BaseButton.vue"
import BaseInputField from "@/components/UI/BaseInputField.vue"

import { BILLING_FIELDS } from "@/utils/constants/BILLING_FIELDS.js"

const state = reactive({
  firstName: ""
})

const rules = {
  firstName: { required }
}

let formData = ref({})

const handleSubmit = async () => {


  const validate = useVuelidate(rules, state, { $lazy: true })

  



   validate.value.$validate()

  console.log(validate.value.firstName.$error)



  //console.log(v$.firstName)
}
</script>
