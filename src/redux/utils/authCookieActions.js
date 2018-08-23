import axios from 'axios';

const [cookie] = document.cookie
  .split(';')
  .filter(x => x.includes('uuid'))
  .map(x => x.replace(/uuid=/, '').trim());

const data = JSON.stringify({ uuid: cookie });
const url = 'http://localhost:3000';
const headers = {
  'Content-Type': 'application/json',
};
export const checkAuthReq = () => {
  return axios.post(url + '/is-authenticated', data, { headers });
};

export const logOutReq = () => {
  console.log('called');
  function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=0';
  }
  eraseCookie('uuid');
  return axios.get(url + '/logout');
};
