/**
 * 环境配置封装
 */

// 获取当前环境
const env = import.meta.env.MODE || "prod"
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi: 'https://www.fastmock.site/mock/e59f1022d5138ebee1fee8b2c0364ac0/api'
  },
  test: {
    baseApi: "/",
    mockApi: 'https://www.fastmock.site/mock/e59f1022d5138ebee1fee8b2c0364ac0/api'
  },
  prod: {
    baseApi: "/",
    mockApi: ''
  }
}
export default {
  env,
  mock: true,
  ...EnvConfig[env]
}