<template>
  <section>
    <div class="container p-4 mx-auto mt-2 flex-container">
      <Form @submit="handleSubmit">
        <div class="w-64 mx-auto lg:w-1/2">
          <div class="flex flex-wrap mt-2">
            <div class="p-2 lg:w-1/2">
              <div v-for="field in BILLING_FIELDS" :key="field.inputId">
                <label :for="field.inputId">{{ field.label }}</label>
                <Field
                  class="w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black"
                  :name="field.inputId"
                  :rules="requiredValue"
                />
                <ErrorMessage
                  class="text-lg text-red-500 font-bold"
                  :name="field.inputId"
                />
              </div>
              <BaseButton type="submit">Submit</BaseButton>
            </div>
          </div>
        </div>
      </Form>
    </div>
  </section>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate"

import BaseButton from "@/components/UI/BaseButton.vue"

import { BILLING_FIELDS } from "./constants/BILLING_FIELDS"

import { checkoutOrder } from "@/graphql/mutations/checkoutOrder"

const requiredValue = value => {
  // if the field is empty
  if (!value) {
    return "This field is required"
  }
  return true
}

const handleSubmit = values => {
  const paymentMethod = "cod"

  const billing = {
    firstName: values.firstName,
    lastName: values.lastName,
    address1: values.address1,
    address2: values.address2,
    city: values.city,
    country: values.country,
    state: values.state,
    postcode: values.postcode,
    email: values.email,
    phone: values.phone,
    company: values.company
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

  //checkoutOrder(checkoutData)
}
</script>
