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
                  v-model="formData[field.inputId]"
                />
                <span class="text-xl text-red-500 font-bold">
                 
                    validate[field.inputId].$errors[0] &&
                    validate[field.inputId].$errors[0].$message
                  
                </span>
              </div>
              <BaseButton type="submit">Submit</BaseButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

import BaseButton from "@/components/UI/BaseButton.vue"
import BaseInputField from "@/components/UI/BaseInputField.vue"

import { BILLING_FIELDS } from "./constants/BILLING_FIELDS"

import { checkoutOrder } from "@/graphql/mutations/checkoutOrder"

/*const rules = {
  firstName: { required },
  lastName: { required },
  address1: { required },
  postcode: { required },
  city: { required },
  email: { email, required },
  phone: { required }
}*/

let formData = ref({})

const handleSubmit = async () => {
  // const isFormCorrect = await validate.value.$validate()

  const paymentMethod = "cod"

  const billing = {
    firstName: formData.value.firstName,
    lastName: formData.value.lastName,
    address1: formData.value.address1,
    address2: formData.value.address2,
    city: formData.value.city,
    country: formData.value.country,
    state: formData.value.state,
    postcode: formData.value.postcode,
    email: formData.value.email,
    phone: formData.value.phone,
    company: formData.value.company
  }

  const checkoutData = {
    //clientMutationId: uid(),
    clientMutationId: "12345678abcdef",
    billing: billing,
    shipping: billing,
    shipToDifferentAddress: false,
    paymentMethod: paymentMethod,
    isPaid: false,
    transactionId: "hjkhjkhsdsdiui"
  }

  checkoutOrder(checkoutData)
}
</script>
