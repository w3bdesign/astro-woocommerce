<template>
  Cart from component:

  {{ cartContent && JSON.stringify(cartContent.contents) }}
</template>

<script setup>

import { getCart } from "@/graphql/queries/getCart"

let cartContent



// setInterval

setTimeout(async () => {
  cartContent = await getCart()

 
}, 5000)






</script>
