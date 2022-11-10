import { fetchAxios } from "../../lib/axios"

export async function updateCart(product) {
  const data = await fetchAxios(
    `
    mutation ($input: UpdateItemQuantitiesInput!) {
        updateItemQuantities(input: $input) {
          items {
            key
            product {
              id
              databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                altText
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  altText
                }
              }
            }
            variation {
              id
              databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                altText
              }
              attributes {
                nodes {
                  id
                  attributeId
                  name
                  value
                }
              }
            }
            quantity
            total
            subtotal
            subtotalTax
          }
          removed {
            key
            product {
              id
              databaseId
            }
            variation {
              id
              databaseId
            }
          }
          updated {
            key
            product {
              id
              databaseId
            }
            variation {
              id
              databaseId
            }
          }
        }
      }    

    `,
    { variables: { input: {items: product }} }
  )

 

  return data?.items
}
