import { fetchAxios } from "../../lib/axios"

export async function getAllCategories() {
  const data = await fetchAxios(`
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
