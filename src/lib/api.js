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

  //console.log("Res is: ", res)

  const json = await res.json()

  // console.log("Json is: ", json)

  if (json.errors) {
    console.log(JSON.stringify(json.errors))
    throw new Error("Failed to fetch API")
  }

  return json.data
}
