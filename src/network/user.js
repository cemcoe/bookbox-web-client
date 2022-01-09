import { request } from './request'

export function getUsersList() {
  return request(
    '/v1/users',
    { method: "GET" }
  )
}