<template>
  <Suspense>
    <template #default>
      <ShowSingleProduct :id="id" :slug="slug" />
    </template>
    <template #fallback>
      <LoadingSpinner />
    </template>
  </Suspense>
</template>

<script setup>
import ShowSingleProduct from "./ShowSingleProduct.vue"
import LoadingSpinner from "@/components/Spinner/LoadingSpinner.vue"

const props = defineProps(["id", "slug"])
</script>
