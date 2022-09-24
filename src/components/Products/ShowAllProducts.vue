<template>
  All Products:
  {{ products }}
</template>

<script setup>
import { getAllProducts } from '../../graphql/queries/getAllProducts'

const products = await getAllProducts()
</script>
