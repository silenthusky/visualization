import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://private-e20da-visualization2.apiary-mock.com/'
  //baseURL: "http://192.168.199.149:8080/showcharts/"
  //headers: {
    //Authorization: 'Bearer {token}'
  //}
})
