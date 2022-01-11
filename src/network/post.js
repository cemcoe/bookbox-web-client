import { request } from './request'

export function getPostList() {
  return request(
    '/v1/posts',
    { method: "GET" }
  )
}
