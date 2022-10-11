<template>
  <Suspense>
    <ShowSingleProduct :id="id" :slug="slug" />
  </Suspense>
</template>

<script setup>
import ShowSingleProduct from "./ShowSingleProduct.vue"

const props = defineProps(["id", "slug"])
</script>
