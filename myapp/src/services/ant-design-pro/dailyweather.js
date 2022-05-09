import { request } from 'umi';

export async function searchDailyweather(options) {
  return request('/api/dailyweather/search', {
    method: 'GET',
    ...(options || {}),
  });
}
  
export async function updateDailyweather(body, options) {
  return request('/api/dailyweather/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
  
  export async function addDailyweather(body, options) {
    return request('/api/dailyweather/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
  
  export async function deleteDailyweather(body, options) {
    return request('/api/dailyweather/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
