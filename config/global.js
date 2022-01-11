
const { NODE_ENV } = process.env // 开发环境还是生产环境

const BASE_URL_Obj = {
  'development': 'http://localhost:3001',
  'production': 'https://api.cemcoe.com',
}

const BASE_URL = BASE_URL_Obj[NODE_ENV]

export {
  BASE_URL,
}