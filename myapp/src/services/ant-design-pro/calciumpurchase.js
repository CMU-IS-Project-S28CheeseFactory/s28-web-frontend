import {request} from 'umi';

export async function searchCalciumpurchase(options) {
    return request('/api/calciumpurchase/search', {
      method: 'GET',
      ...(options || {}),
    });
  }
  
  export async function updateCalciumpurchase(body, options) {
    return request('/api/calciumpurchase/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
  
  export async function addCalciumpurchase(body, options) {
    return request('/api/calciumpurchase/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
  
  export async function deleteCalciumpurchase(body, options) {
    return request('/api/calciumpurchase/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
