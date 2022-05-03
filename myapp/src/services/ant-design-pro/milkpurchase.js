import { request } from 'umi';


export async function searchMilk(options) {
  return request('/api/milkpurchase/search', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function addMilk(body, options) {
  return request('/api/milkpurchase/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteMilk(body, options) {
  return request('/api/milkpurchase/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}