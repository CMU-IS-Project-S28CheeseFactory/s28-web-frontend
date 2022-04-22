import { request } from 'umi';


export async function searchProduction(options) {
  return request('/api/productionprocess/search', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function addProduction(body, options) {
  return request('/api/productionprocess/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteProduction(body, options) {
  return request('/api/productionprocess/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}