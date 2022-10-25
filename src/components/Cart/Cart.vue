<template>
  <div v-if="cartContent">
    <div
      v-for="products in cartContent"
      :key="products.id"
      class="container mx-auto mt-4 flex-container"
    >
      <div class="item">
        <span class="block mt-2 font-extrabold">Remove: <br /></span>
        <span class="item-content"> Remove </span>
      </div>
      <div class="item">
        <span class="block mt-2 font-extrabold">Name: <br /></span>
        <span class="item-content">{{ products.product.name }}</span>
      </div>
      <div class="item">
        <span class="block mt-2 font-extrabold">Quantity: <br /> </span>
        <span class="item-content">
          {{ products.quantity }}
        </span>
      </div>
      <div class="item">
        <span class="block mt-2 font-extrabold">Subtotal: <br /></span>
        <span class="item-content"> {{ products.total }} </span>
      </div>
    </div>
  </div>
  <div v-else>
    <LoadingSpinner />
  </div>
  <h2 v-if="!cartContent" class="m-4 text-3xl text-center">
    Cart is currently empty
  </h2>
  <CartCheckoutButton v-else />

</template>

<script setup>
import { ref, onBeforeMount } from "vue"

import { getCart } from "@/graphql/queries/getCart"

import LoadingSpinner from "@/components/Spinner/LoadingSpinner.vue"
import CartCheckoutButton from "@/components/Cart/CartCheckoutButton.vue"

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

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  max-width: 1380px;
  @apply border border-gray-300 rounded-lg shadow;
}

.item {
  @apply lg:m-2 xl:m-4 xl:w-1/6 lg:w-1/6 sm:m-2 w-auto;
}

.item-content {
  @apply inline-block mt-4 w-20 h-12 md:w-full lg:w-full xl:w-full;
}

.removing {
  @apply animate-spin cursor-not-allowed;
}
</style>
