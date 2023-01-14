import axios from "axios"

export async function fetchAxios(query, { variables } = {}) {
  const { PUBLIC_GRAPHQL_URL } = import.meta.env

  let woocommerceSession
  let axiosData

  if (localStorage["woocommerce-session"]) {
    woocommerceSession = localStorage["woocommerce-session"]
  }

  const headers = {
    "content-type": "application/json",
    "woocommerce-session": `Session ${woocommerceSession}`
  }

  axios.defaults.withCredentials = true

  try {
    axiosData = await axios({
      url: PUBLIC_GRAPHQL_URL,
      method: "POST",
      headers: headers,
      withCredentials: true,
      data: {
        query: query,
        variables: variables
      }
    })

    if (import.meta.env.DEV && axiosData.data.errors[0].message) {
      console.log("Error:  ", axiosData.data.errors[0].message)
    }

    if (!localStorage["woocommerce-session"]) {
      localStorage["woocommerce-session"] =
        axiosData.headers["woocommerce-session"]
    }
  } catch (e) {
    if (import.meta.env.DEV && axiosData.data.errors) {
      console.log("Error: ", e)
    }
  }

  return axiosData.data.data
}
