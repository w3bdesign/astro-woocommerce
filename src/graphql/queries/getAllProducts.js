import { fetchAPI } from '../../lib/api'

export async function getAllProducts() {
  const data = await fetchAPI(`
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
