<template>
  <ais-instant-search :search-client="searchClient" index-name="dfweb">
    <ais-search-box />
    <ais-stats />
    <ais-refinement-list attribute="pa_color" />
    <ais-hits>
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
    </ais-hits>
    <ais-pagination />
  </ais-instant-search>
</template>

<script setup>
import {
  AisInstantSearch,
  AisRefinementList,
  AisHits,
  AisHighlight,
  AisSearchBox,
  AisStats,
  AisPagination
} from "vue-instantsearch/vue3/es"

import algoliasearch from "algoliasearch/lite"

import "instantsearch.css/themes/satellite.css"

const searchClient = algoliasearch(
  import.meta.env.PUBLIC_ALGOLIA_APPLICATION_ID,
  import.meta.env.PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
)

const convertProductNameToSlug = productName =>
  productName.replace(/ /g, "-").toLowerCase()
</script>

<style scoped>
@media (max-width: 767px) {
  .CustomHitsItem {
    padding: 10px;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .CustomHitsItem {
    width: 30%;
  }
}
</style>
