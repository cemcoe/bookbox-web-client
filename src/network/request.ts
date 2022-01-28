const BASE_URL = 'http://localhost:3001'
// import { BASE_URL } from '../../config/global.js'

// Example POST method implementation:
// TODO: 将公用的代码抽离

// 约束对象必须要具有某个属性
interface IOptions {
  method: string;
  data?: any; // 我暂时还不知道这货是啥类型
  [propName: string]: any // 可以添加任意的属性
}

interface IResponse {
  status: number;
  json: any; // 如何定义函数
}


export async function request(url = '', options: IOptions = { method: "GET" }) {

  // 拼接完整的请求地址
  url = BASE_URL + url
  const { method } = options

  console.log(options, 'options')

  // GET 请求
  if (method === 'GET') {
    const response: IResponse = await fetch(url, {
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
    }
    );
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // POST 请求
  if (method === 'POST') {
    const response: IResponse = await fetch(url, {
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
    }
    );
    return response.json(); // parses JSON response into native JavaScript objects
  }
}