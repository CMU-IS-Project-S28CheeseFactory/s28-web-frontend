import { request } from 'umi';


export async function searchProduction(options) {
  return request('/api/productionprocess/search', {
    method: 'GET',
    ...(options || {}),
  });
}