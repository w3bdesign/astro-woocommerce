<template>
  <div class="container mx-auto">
    <div v-if="products">
      <h1 class="h-10 p-6 text-3xl font-bold text-center">
        {{ products.name }}
      </h1>
      <br />
      <ShowAllProductstest :allProducts="products.products.nodes" />
      <div v-if="!products.products.nodes.length" class="mt-10">
        <h2 class="h-10 text-2xl font-bold text-center">
          No products to display
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import ShowAllProductstest from "@/components/Products/ShowAllProductstest.vue"

defineProps(["products"])
</script>
