// import { boot } from 'quasar/wrappers';
// import axios, { AxiosInstance } from 'axios';

// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $axios: AxiosInstance;
//     $api: AxiosInstance;
//   }
// }

// // Be careful when using SSR for cross-request state pollution
// // due to creating a Singleton instance here;
// // If any client changes this (global) instance, it might be a
// // good idea to move this instance creation inside of the
// // "export default () => {}" function below (which runs individually
// // for each client)
// const api = axios.create({ baseURL: 'https://api.example.com' });

// export default boot(({ app }) => {
//   // for use inside Vue files (Options API) through this.$axios and this.$api

//   app.config.globalProperties.$axios = axios;
//   // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
//   //       so you won't necessarily have to import axios in each vue file

//   app.config.globalProperties.$api = api;
//   // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
//   //       so you can easily perform requests against your app's API
// });

// export { api };

import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://www.marketing-backend.scientiflow.com/api';
const authToken = '9d13375ffa60153ff36a8b802ff4f4e72aec52e0a5ad752a435e3d26736d36a80479056f21d5831f6a5a783f2524987ae51be2c88c1032f642cfb110d7577e567a49e65f83e7cb0aca79037ee8fb295ecc160cb5cb4b8d317582379bb10403a788b090ed2e3703da52b1f84cd2ff824e387990269cbbedbc614ef1b969d63666';


const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  },
});


export default boot(({ app }) => {

  app.config.globalProperties.$api = api;
});

export { api };
