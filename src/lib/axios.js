import axios from "axios"

export async function fetchAxios(query, { variables } = {}) {
  const { PUBLIC_GRAPHQL_URL } = import.meta.env

  axios({
    url: PUBLIC_GRAPHQL_URL,
    method: "POST",
    data: {
      query: query,
      variables: variables
    }
  }).then(result => {
    console.log(result.data.data)

    return result.data.data
  })
}

/*
export async function fetchAPI(query, { variables } = {}) {
  const { PUBLIC_GRAPHQL_URL } = import.meta.env
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true
  }

  const res = await fetch(PUBLIC_GRAPHQL_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  })

  const json = await res.json()

  if (json.errors) {
    console.log(JSON.stringify(json.errors))
    throw new Error("Failed to fetch API")
  }

  return json.data
}
*/
