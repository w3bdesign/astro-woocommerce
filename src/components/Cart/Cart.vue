<template>
  cartContent from component:
  <pre>{{ cartContent }}</pre>
  Cart length: {{ cartLength }} - Cart total: {{ subTotal }}
</template>

<script setup>
import { ref } from "vue"

import { getCart } from "@/graphql/queries/getCart"

let cartContent = ref()
let subTotal = ref()
let cartLength = ref(0)

setTimeout(async () => {
  const cart = await getCart()

  if (cart && cart.contents.nodes[0]) {
    cartContent.value = cart.contents.nodes
    console.log(cart.contents.nodes[0].quantity)
    cartLength.value = cart.contents.nodes[0].quantity
    subTotal.value = cart.contents.nodes[0].total
    console.log("Total:", cart.contents.nodes[0].total)
  }
}, 5000)
</script>
