// 0. 一个普通的fetch请求

// fetch('https://api.cemcoe.com/v1/posts')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// 1. 抽离BASEURL
// const BASE_URL = 'https://api.cemcoe.com';
// const url = '/v1/posts';

// fetch(`${BASE_URL}${url}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// 2. 抽成一个类
// 面向对象：封装继承多态
// class BXRequest {
//   // TS 特有语法，你要定义
//   // url: string;
//   // 类的构造方法
//   constructor(url: string) {
//     const BASE_URL = 'https://api.cemcoe.com';
//     // this.url = url;
//     fetch(`${BASE_URL}${url}`)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
//   // 类的一般方法
//   sayHi() {
//     console.log('hello 我是');
//   }
// }

// const demoRequest = new BXRequest('/v1/posts');
// demoRequest.sayHi();

// 3. 分三层开发 class new function
// class BXRequest {
//   // TS 特有语法，你要定义
//   BASE_URL: string;
//   // 类的构造方法
//   constructor(BASE_URL: string) {
//     // const BASE_URL = 'https://api.cemcoe.com';
//     this.BASE_URL = BASE_URL;
//     // fetch(`${BASE_URL}${url}`)
//     //   .then((response) => response.json())
//     //   .then((data) => console.log(data));
//   }
//   // 类的一般方法
//   request(url: string) {
//     fetch(`${this.BASE_URL}${url}`)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
// }

// const demoRequest = new BXRequest('https://api.cemcoe.com');
// demoRequest.request('/v1/posts');

// 4. 将请求的接口数据返回到外层
class BXRequest {
  // TS 特有语法，你要定义
  BASE_URL: string;
  init?: RequestInit;
  // 类的构造方法
  constructor(BASE_URL: string, init?: RequestInit) {
    // const BASE_URL = 'https://api.cemcoe.com';
    this.BASE_URL = BASE_URL;
    this.init = init;
    // fetch(`${BASE_URL}${url}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }
  // 类的一般方法
  request(input: RequestInfo, init?: RequestInit) {
    // 将两个init合并
    init = { ...this.init, ...init };
    return new Promise((resolve, reject) => {
      fetch(`${this.BASE_URL}${input}`, init)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          const { status, data } = res;
          if (status === 200) {
            // TODO: resolve res VS data?
            resolve(res);
          } else {
            console.log(status);
            // TODO: 什么情况下reject出去比较好 要不要reject
            // https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
            // 当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject，
            // 即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （如果响应的 HTTP 状态码不在 200 - 299 的范围内，
            // 则设置 resolve 返回值的 ok 属性为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
          }
        });
    });
  }
}

// const demoRequest = new BXRequest('https://api.cemcoe.com');
// const res = await demoRequest.request('/v1/posts');
// console.log(res, 'await');

export default BXRequest;
