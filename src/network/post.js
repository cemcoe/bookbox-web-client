import { request } from './request'

export function getPostList() {
  return request(
    '/v1/posts',
    { method: "GET" }
  )
}

// 创建文章
export function createPost(post) {
  return request(
    '/v1/post',
    { method: "POST", data: post },
  )
}
