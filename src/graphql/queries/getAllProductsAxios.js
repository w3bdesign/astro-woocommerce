import { fetchAxios } from "../../lib/axios"

export async function getAllProducts() {
  const data = await fetchAxios(`
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
  }  
    `)

  return data?.products
}
