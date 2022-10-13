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
import { getCart } from "@/graphql/queries/getCart"

import { filteredVariantPrice } from "@/utils/functions"

const testCart = await getCart()

console.log("Test Cart: ", testCart)

// Default values for testing
const remoteError = false

const cartLength = 1

const subTotal = 199
</script>
