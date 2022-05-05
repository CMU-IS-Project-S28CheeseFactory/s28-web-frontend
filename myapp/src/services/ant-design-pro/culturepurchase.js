import { request } from 'umi';

export async function searchCulturePurchase(options) {
  return request('/api/culturepurchase/search', {
    method: 'GET',
    ...(options || {}),
  });
}