import { request } from 'umi';


export async function searchSalesOrder(options) {
  return request('/api/salesorder/search', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function addSalesOrder(body, options) {
  return request('/api/salesorder/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteSalesOrder(body, options) {
  return request('/api/salesorder/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}