<template>
  <Suspense>
    <template #default>
      <ShowAllProducts />
    </template>
    <template #fallback>
      <LoadingSpinner />
    </template>
  </Suspense>
</template>

<script setup>
import ShowAllProducts from "./ShowAllProducts.vue"
import LoadingSpinner from "@/components/Spinner/LoadingSpinner.vue"
</script>
