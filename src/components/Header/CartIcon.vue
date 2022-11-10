<template>
  <div>
    <div v-if="remoteError">
      <span class="text-xl text-red-500"
        >Error fetching cart. Please refresh the page.</span
      >
    </div>
    <Transition>
      <div v-if="cartLength">
        <a href="/cart">
          <span class="text-xl text-white no-underline lg:text-black is-active">
            <img
              alt="Cart icon"
              class="h-12 ml-4 lg:ml-2"
              aria-label="Cart"
              src="../../../public/svg/Cart.svg"
          /></span>
        </a>
        <div>
          <span
            class="absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-white bg-black rounded-full lg:ml-14"
          >
            {{ cartLength }}
          </span>
          <span>Total: {{ subTotal }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"

import { getCart } from "@/graphql/queries/getCart"

let cartContent

let subTotal = ref("kr 0")

let cartLength = ref(0)

onBeforeMount(async () => {
  cartContent = await getCart()

  if (cartContent && cartContent.contents.nodes[0]) {
    cartLength.value = cartContent.contents.nodes.reduce(
      (accumulator, argument) => accumulator + argument.quantity,
      0
    )
    subTotal.value = cartContent.total
    subTotal.value = subTotal.value.replace("kr", "kr ")
  }
})

// Default values for testing
const remoteError = false
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
