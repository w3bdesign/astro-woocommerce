<template>
  <div>
    <div v-if="remoteError">
      <span class="text-xl text-red-500"
        >Error fetching cart. Please refresh the page.</span
      >
    </div>
    <div v-else>
      <transition name="cart">
        <a href="/cart">
          <span
            v-if="cartLength"
            class="text-xl text-white no-underline lg:text-black is-active"
          >
            <img
              alt="Cart icon"
              class="h-12 ml-4 lg:ml-2"
              aria-label="Cart"
              src="../../../public/svg/Cart.svg"
          /></span>
        </a>
      </transition>
      <transition name="cart">
        <div v-if="cartLength">
          <span
            class="absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-white bg-black rounded-full lg:ml-14"
          >
            {{ cartLength }}
          </span>
          <span>Total: {{ subTotal }}</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

import { getCart } from "@/graphql/queries/getCart"

let cartContent

let subTotal = ref("kr 0")

let cartLength = ref(0)

// setInterval

setTimeout(async () => {
  cartContent = await getCart()

  if (cartContent && cartContent.contents.nodes[0]) {
    cartLength.value = cartContent.contents.nodes[0].quantity
    subTotal.value = cartContent.contents.nodes[0].total
    subTotal.value = subTotal.value.replace("kr", "kr ")
  }
}, 2000)

// Default values for testing
const remoteError = false
</script>
