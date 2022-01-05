import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2lW_p8Opi2qYREcu_Ld6Fcg76zcpknkOfhKjjwkZyZU',
  },
});
