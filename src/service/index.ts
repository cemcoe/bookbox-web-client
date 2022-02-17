// service 统一接口
import BXRequest from './request';
import { BASE_URL } from '../../config/global';

export default new BXRequest(BASE_URL, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
