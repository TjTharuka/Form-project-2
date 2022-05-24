import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

/**
 * Read firebase user and return the token as a promise
 * @returns {Promise<null|{headers: {Authorization: string}}>}
 */
export const createHeader = async (cancelToken) => {
  const token = localStorage.getItem('user_accessToken');
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      cancelToken: cancelToken && cancelToken.token,
    };
  }

  return null;
};

/**
 *
 * @param route
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
const post = async (route, data) => {
  // get header
  const config = await createHeader();
  // axios post method
  return axios.post(
    `${url}${route}`,
    {
      ...data,
    },
    config
  );
};

/**
 *
 * @param route
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
const postFormData = async (route, data) => {

  // get header
  const config = await createHeader();
  // axios post method
  return axios.post(`${url}${route}`, data, config);
};

/**
 *
 * @param route
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
const put = async (route, data) => {
  // get header
  const config = await createHeader();
  // axios post method
  return axios.put(
    `${url}${route}`,
    {
      ...data,
    },
    config
  );
};

const remove = async (route) => {
  // get header
  const config = await createHeader();
  // axios delete method
  return axios.delete(`${url}${route}`, config);
};

const get = async (route, cancelToken) => {
  // get header
  const config = await createHeader(cancelToken);
  // axios post method
  return axios.get(`${url}${route}`, config);
};

export { post, postFormData, remove, put, get };
