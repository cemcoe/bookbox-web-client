import { request } from './request'

export function getUsersList() {
  return request(
    '/v1/users',
    { method: "GET" }
  )
}

export function login(user) {
  return request(
    '/v1/login',
    { method: "POST", data: user },
  )
}