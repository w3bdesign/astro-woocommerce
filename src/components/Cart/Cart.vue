<template>
  <div v-if="cartContent">
    <pre>{{ cartContent }} </pre>
    <br />
    Cart length: {{ cartLength }}
    <br />
    Cart total: {{ subTotal }}
  </div>
  <div v-else>
    <LoadingSpinner />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"

import { getCart } from "@/graphql/queries/getCart"

import LoadingSpinner from "@/components/Spinner/LoadingSpinner.vue"

let cartContent = ref()
let subTotal = ref()
let cartLength = ref(0)

onBeforeMount(async () => {
  const cart = await getCart()

  if (cart && cart.contents.nodes[0]) {
    cartContent.value = cart.contents.nodes

    cartLength.value = cart.contents.nodes[0].quantity
    subTotal.value = cart.contents.nodes[0].total
  }
})
</script>
