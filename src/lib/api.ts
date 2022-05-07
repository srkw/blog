import { microCMSApiUrl } from "./urls"

const headers = {
  Accept: 'application/json',
  'Content-type': 'application/json',
}

const blogApiHeaders = {
  ...headers,
  'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || ''
}

export const fetchBlogContents = () =>
  fetch(microCMSApiUrl, {
    headers: blogApiHeaders,
    mode: 'cors',
  })
