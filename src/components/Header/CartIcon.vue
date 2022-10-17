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
            Cart length: {{ cartLength }}
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

let testCart

let cartLength //= 1

setInterval(async () => {
  testCart = await getCart()

  console.log("testCart.contents.nodes[0]", testCart.contents.nodes[0])

  if (testCart.contents.nodes[0]) {
    console.log("Nodes!")
    cartLength = testCart.contents.nodes[0].quantity
  }
  //console.log("testCart length is:", testCart.contents.nodes[0].quantity)
}, 6000)

// Default values for testing
const remoteError = false

const subTotal = 199
</script>
