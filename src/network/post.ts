import { request } from './request.ts'

export function getPostList() {
  return request(
    '/v1/posts',
    { method: "GET" }
  )
}
