import { request } from 'umi';

export async function searchCheeseinfo(options) {
  return request('/api/cheeseinfo/search', {
    method: 'GET',
    ...(options || {}),
  });
}
  
export async function updateCheeseinfo(body, options) {
  return request('/api/cheeseinfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
  
  export async function addCheeseinfopurchase(body, options) {
    return request('/api/cheeseinfo/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
  
  export async function deleteCheeseinfo(body, options) {
    return request('/api/cheeseinfo/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
