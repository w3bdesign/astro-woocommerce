import { fetchAxios } from "../../lib/axios"

export async function checkoutOrder(order) {
  const data = await fetchAxios(
    `
    mutation CHECKOUT_MUTATION($input: CheckoutInput!) {
        checkout(input: $input) {
          result
          redirect
        }
      }
    `,
    { variables: { input: order } }
  )

  console.log("Data from checkout: ", data)

  return data?.addToCart
}
