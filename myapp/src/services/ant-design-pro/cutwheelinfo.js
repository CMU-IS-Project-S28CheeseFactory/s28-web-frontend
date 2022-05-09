import { request } from 'umi';

export async function searchCutwheelinfo(options) {
  return request('/api/cutwheelinfo/search', {
    method: 'GET',
    ...(options || {}),
  });
}
  
export async function updateCutwheelinfo(body, options) {
  return request('/api/cutwheelinfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
  
  export async function addCutwheelinfo(body, options) {
    return request('/api/cutwheelinfo/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
  
  export async function deleteCutwheelinfo(body, options) {
    return request('/api/cutwheelinfo/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
