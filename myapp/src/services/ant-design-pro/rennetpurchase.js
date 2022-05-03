import { request } from 'umi';


export async function searchRennet(options) {
  return request('/api/rennetpurchase/search', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function addRennet(body, options) {
  return request('/api/rennetpurchase/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteRennet(body, options) {
  return request('/api/rennetpurchase/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}