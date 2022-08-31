<template>
  Dette er en Vue 3 komponent. Data fra Graphql:

  {{ weather }}
</template>

<script setup>
//import FETCH_ALL_PRODUCTS_QUERY from "@/graphql/queries/FETCH_ALL_PRODUCTS_QUERY.gql";
//import FETCH_ALL_PRODUCTS_QUERY from "../../graphql/queries/FETCH_ALL_PRODUCTS_QUERY.gql";

const { PUBLIC_GRAPHQL_URL } = import.meta.env;

const response = await fetch(PUBLIC_GRAPHQL_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    //query: FETCH_ALL_PRODUCTS_QUERY,

    query: `
       {
  products(first: 24) {
    nodes {
      databaseId
      name
      onSale
      slug
      image {
        sourceUrl
      }
      ... on SimpleProduct {
        databaseId
        price
        regularPrice
        salePrice
      }
      ... on VariableProduct {
        databaseId
        price
        regularPrice
        salePrice
        variations {
          nodes {
            price
            regularPrice
            salePrice
          }
        }
      }
    }
  }
}        `,
  }),
});

const json = await response.json();

const weather = json.data;
</script>
