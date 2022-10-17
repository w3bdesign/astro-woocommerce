import axios from "axios"

export async function fetchAxios(query, { variables } = {}) {
  const { PUBLIC_GRAPHQL_URL } = import.meta.env

  const headers = {
    "content-type": "application/json"/*,
    "woocommerce-session":
      "Session eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29vY29tbWVyY2UuZGZ3ZWIubm8iLCJpYXQiOjE2NjU5NzQwNjksIm5iZiI6MTY2NTk3NDA2OSwiZXhwIjoxNjY2MTQ2ODY5LCJkYXRhIjp7ImN1c3RvbWVyX2lkIjoidF9iMTkzODcwMGY2MGE3YzE0YjVjNGNkYTgwYjZhYzgifX0.MBkm6s2lWtopoaE1rTvLyFDbtFFB56Q3cYVKe5hTNcg"*/
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
      console.log("Response headers: ", response.headers["woocommerce-session"])
      return response.data.data
    })
    .catch(error => {
      console.log("Error: ", error)
    })
}
