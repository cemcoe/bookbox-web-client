const NODE_ENV: string = process.env.NODE_ENV || 'development'; // 开发环境还是生产环境

// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

type tBASE_URLS = {
  [key: string]: string;
};

const BASE_URLS: tBASE_URLS = {
  development: 'http://localhost:3001',
  production: 'https://api.cemcoe.com'
};

const BASE_URL = BASE_URLS[NODE_ENV];

export { BASE_URL };
