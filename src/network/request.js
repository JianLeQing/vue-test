
export function request(config){
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.32.32:8000',
    timeout: 5000
  })
  // 2.发送真正的网络请求
  return instance(config);
}
