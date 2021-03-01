const contentful = require("contentful")

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in contentful terms
  space: space,
  // This is the access token for this space.
  accessToken: accessToken,
})

export default client
