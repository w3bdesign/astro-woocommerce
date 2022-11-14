// https://github.com/bholmesdev/astro-zod-form-demo/blob/main/src/pages/api/newsletter.ts

export const post = async ({ request }) => {
  const result = await request.formData()

  if (result) {
    if (import.meta.env.DEV) {
      console.log(result)
    }
    return new Response(null, { status: 200 })
  } else {
    return new Response(
      JSON.stringify({
        message: "Data is mal-form-ed (hehe)"
      }),
      { status: 400 }
    )
  }
}
