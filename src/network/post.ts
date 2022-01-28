import { request } from './request'

export function getPostList() {
  return request(
    '/v1/posts',
    { method: "GET", }
  )
}

// 创建文章
export function createPost(post: Object) {
  return request(
    '/v1/post',
    { method: "POST", data: post },
  )
}

// 获取文章详情
export function getPostDetailAPI(id: string | string[]) {
  return request(
    `/v1/post/${id}`,
    { method: "GET" }
  )
}

// 更新文章
export function updatePostApi(id: number, post: Object) {
  console.log(id, post, 'resuest')
  return request(
    `/v1/post/${id}`,
    { method: "PUT", data: post }
  )
}