const BASE_URL = 'http://localhost:3001'
// import { BASE_URL } from '../../config/global.js'
import router from '../router'

// Example POST method implementation:
// TODO: 将公用的代码抽离

export async function request(url = '', options = {}) {

  // 拼接完整的请求地址
  url = BASE_URL + url
  const { method } = options
  let response

  // GET 请求
  if (method === 'GET') {
    response = await fetch(url, {
      method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

  }

  if (method === 'POST') {
    response = await fetch(url, {
      method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(options.data) // body data type must match "Content-Type" header
    });

  }

  if (method === 'PUT') {
    response = await fetch(url, {
      method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(options.data) // body data type must match "Content-Type" header
    });

  }

  if (response.status === 401) {
    console.log('未授权')
    // TODO: 页面跳转，更加友好的弹窗提醒
    router.push('/login')
    // TOOD: 其他状态码的拦截
  }

  return response.json(); // parses JSON response into native JavaScript objects
}
