import { request } from 'umi';

export async function searchCulturePurchase(options) {
  return request('/api/culturepurchase/search', {
    method: 'GET',
    ...(options || {}),
  });
}
  
export async function updateCulturepurchase(body, options) {
  return request('/api/culturepurchase/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
  
  export async function addCulturepurchase(body, options) {
    return request('/api/culturepurchase/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
  
  export async function deleteCulturepurchase(body, options) {
    return request('/api/culturepurchase/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
