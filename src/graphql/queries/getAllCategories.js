import { fetchAPI } from "../../lib/api"

export async function getAllProducts() {
  const data = await fetchAPI(`
  {
    productCategories(first: 20) {
      nodes {
        id
        databaseId
        name
        slug
      }
    }
  }
  
    `)

    console.log("Categories data:", data)

  return data?.products
}
