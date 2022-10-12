import { fetchAPI } from "../../lib/api"

export async function addToCart(product) {
  console.log("Gql product: ", product)

  const data = await fetchAPI(
    `
    mutation ($input: AddToCartInput!) {
        addToCart(input: $input) {
          cartItem {
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
        }
      }
    `,
    { variables: { input: product } }
  )

  console.log("Cart data from gql: ", data.addToCart.cartItem)
  return data?.addToCart
}
