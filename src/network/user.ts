import { request } from './request';

export function getUsersList() {
  return request('/v1/users', { method: 'GET' });
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function login(user: Object) {
  return request('/v1/login', { method: 'POST', data: user });
}

// 获取登录用户信息
export function getOwnerInfo() {
  return request('/v1/owner', { method: 'GET' });
}

// 获取用户信息
export function getUserInfoAPI(id: string) {
  return request(`/v1/user/${id}`, { method: 'GET' });
}
