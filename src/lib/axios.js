import axios from "axios"

export async function fetchAxios(query, { variables } = {}) {
  const { PUBLIC_GRAPHQL_URL } = import.meta.env

  let woocommerceSession = undefined

  if (localStorage["woocommerce-session"]) {
    woocommerceSession = localStorage["woocommerce-session"]
  }

  const headers = {
    "content-type": "application/json",
    "woocommerce-session": `Session ${woocommerceSession}`
  }

  axios.defaults.withCredentials = true

  return axios({
    url: PUBLIC_GRAPHQL_URL,
    method: "POST",
    headers: headers,
    withCredentials: true,
    data: {
      query: query,
      variables: variables
    }
  })
    .then(response => {
      if (!localStorage["woocommerce-session"]) {
        localStorage["woocommerce-session"] =
          response.headers["woocommerce-session"]
      }

      return response.data.data
    })
    .catch(error => {
      if (import.meta.env.DEV) {
        console.log("Error: ", error)
      }
    })
}
