import { fetchAxios } from "../../lib/axios"

export async function getProductsFromCategory(id) {
  const data = await fetchAxios(
    `
    query ProductsFromCategory($id: ID!) {
        productCategory(id: $id, idType: DATABASE_ID) {
          id
          name
          products(first: 50) {
            nodes {
              id
              databaseId
              onSale
              averageRating
              slug
              description
              image {
                id
                uri
                title
                srcSet
                sourceUrl
              }
              name
              ... on SimpleProduct {
                salePrice
                regularPrice
                onSale
                price
                id
              }
              ... on VariableProduct {
                salePrice
                regularPrice
                onSale
                price
                id
              }
              ... on ExternalProduct {
                price
                id
                externalUrl
              }
              ... on GroupProduct {
                products {
                  nodes {
                    ... on SimpleProduct {
                      id
                      price
                    }
                  }
                }
                id
              }
            }
          }
        }
    }     
      
    `,
    { variables: { id } }
  )

  return data?.productCategory
}
