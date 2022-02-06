// service 统一接口
import BXRequest from './request';

export default new BXRequest('https://api.cemcoe.com', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
