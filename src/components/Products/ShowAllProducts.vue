<template>Dette er en Vue 3 komponent. Data fra Graphql:</template>

<script setup>
import { getAllProducts } from "../../graphql/queries/getAllProducts";

//const test = await getAllProducts().then(console.log("SSS"));

const test = await getAllProducts().then(console.log("SSS"));
</script>
