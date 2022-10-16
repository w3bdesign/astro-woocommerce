import axios from "axios"

export async function fetchAxios(query, { variables } = {}) {
  const { PUBLIC_GRAPHQL_URL } = import.meta.env

  const headers = {
    "content-type": "application/json"
  }

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
      return response.data.data
    })
    .catch(error => {
      console.log("Error: ", error)
    })
}
