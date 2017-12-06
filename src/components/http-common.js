import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://private-e20da-visualization2.apiary-mock.com/'
  //headers: {
    //Authorization: 'Bearer {token}'
  //}
})
