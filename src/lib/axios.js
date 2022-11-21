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

    if (!localStorage["woocommerce-session"]) {
      localStorage["woocommerce-session"] =
        axiosData.headers["woocommerce-session"]
    }
  } catch {
    error => {
      if (import.meta.env.DEV) {
        console.log("Error: ", error)
      }
    }
  }

  return axiosData.data.data
}
