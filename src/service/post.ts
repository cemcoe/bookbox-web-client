import BXRequest from './index';

BXRequest.request('/v1/posts').then((res) => {
  console.log(res, 'main');
});

// eslint-disable-next-line @typescript-eslint/ban-types
export function updatePostApi(id: string | string[], post: Object) {
  return BXRequest.request(`/v1/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post)
  });
}
