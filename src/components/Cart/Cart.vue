<template>
  <div v-if="cartContent">
    <div
      v-for="products in cartContent"
      :key="products.id"
      class="mx-auto mt-4 flex-container"
    >
      <div v-if="showCheckoutButton" class="item">
        <span class="block mt-2 font-extrabold">Remove: <br /></span>
        <span class="item-content">
          <button @click="handleProductRemove(products)">
            <BaseXSVG />
          </button>
        </span>
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
    <div
      v-if="showCheckoutButton"
      class="container mx-auto flex justify-end mt-2 max-w-[1380px]"
    >
      <CartCheckoutButton />
    </div>
  </div>
  <div v-else>
    <h2 class="m-4 text-3xl text-center">Cart is currently empty</h2>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"

import { getCart } from "@/graphql/queries/getCart"
import { updateCart } from "@/graphql/mutations/updateCart"

import CartCheckoutButton from "@/components/Cart/CartCheckoutButton.vue"
import BaseXSVG from "@/components/UI/BaseXSVG.vue"

let cartContent = ref()
let subTotal = ref()
let cartLength = ref(0)

defineProps(["showCheckoutButton"])

const handleProductRemove = product => {
  let updatedItems = []
  updatedItems.push({
    key: product.key,
    quantity: 0
  })

  updateCart(updatedItems).then(() => window.location.reload())
}

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
  @apply border border-gray-300 rounded-lg shadow max-w-[1380px];
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
