<template>
  <AisInstantSearch :search-client="searchClient" index-name="dfweb">
    <AisSearchBox />
    <AisStats />
    <AisRefinementList attribute="pa_color" />
    <AisHits :class-names="{ 'ais-Hits-item': 'CustomHitsItem' }">
      <template v-slot:item="{ item }">
        <a
          :href="`/products/${convertProductNameToSlug(item.product_name)}/${
            item.objectID
          }`"
          class="text-black cursor-pointer hover:underline"
        >
          <p class="p-2 text-2xl font-bold text-center">
            {{ item.product_name }}
          </p>
        </a>
        <p class="p-2 text-xl text-center">
          {{ item.short_description }}
        </p>
        <p class="p-2">
          <img :src="item.product_image" alt="item.product_name" />
        </p>
        <p class="p-2 text-xl text-center">
          {{ item.sale_price ? item.sale_price : item.regular_price }} kr
        </p>
      </template>
    </AisHits>
    <AisPagination />
  </AisInstantSearch>
</template>

<script setup>
import {
  AisInstantSearch,
  AisRefinementList,
  AisHits,
  AisSearchBox,
  AisStats,
  AisPagination
} from "vue-instantsearch/vue3/es"

import algoliasearch from "algoliasearch/lite"

import "instantsearch.css/themes/algolia-min.css"

const searchClient = algoliasearch(
  import.meta.env.PUBLIC_ALGOLIA_APPLICATION_ID,
  import.meta.env.PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
)

const convertProductNameToSlug = productName =>
  productName.replace(/ /g, "-").toLowerCase()
</script>

<style>
@media (max-width: 767px) {
  .CustomHitsItem {
    padding: 10px;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .CustomHitsItem {
    width: 32.2%;
  }
}
</style>
