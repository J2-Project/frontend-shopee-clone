const DEFAULT_OPTION = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    withCredentials: true,
    withXSRFToken: true,
    credentials: 'include'
  }
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchCsrf = async () => {
  await fetch(`${BASE_API_URL}sanctum/csrf-cookie`, {
    method: 'GET',
    ...DEFAULT_OPTION
  });
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 401) {
    return response;
  }

  if (response.status === 422) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = (response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

export const get = async (url, params = null, options) => {
  if (localStorage.getItem('token')) {
    DEFAULT_OPTION.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  const finalOptions = { ...options, ...DEFAULT_OPTION, method: 'GET' };
  const parseUrl = new URL(url);

  if (params !== null) {
    Object.keys(params).forEach((key) =>
      parseUrl.searchParams.append(key, params[key])
    );
  }

  return await fetch(parseUrl, finalOptions).then(checkStatus).then(parseJSON);
};

export const post = async (url, data, options) => {
  if (localStorage.getItem('token')) {
    DEFAULT_OPTION.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  await fetchCsrf();

  const finalOptions = {
    ...options,
    ...DEFAULT_OPTION,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data)
  };

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const put = async (url, data, options) => {
  if (localStorage.getItem('token')) {
    DEFAULT_OPTION.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  await fetchCsrf();

  const finalOptions = {
    ...options,
    ...DEFAULT_OPTION,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data)
  };

  await csrf();

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const patch = async (url, data, options) => {
  if (localStorage.getItem('token')) {
    DEFAULT_OPTION.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  await fetchCsrf();

  const finalOptions = {
    ...options,
    ...DEFAULT_OPTION,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data)
  };

  await csrf();

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const postFile = async (url, data, options) => {
  if (localStorage.getItem('token')) {
    DEFAULT_OPTION.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  await fetchCsrf();

  const finalOptions = {
    ...options,
    ...DEFAULT_OPTION,
    method: 'POST',
    body: JSON.stringify(data)
  };

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const request = async (url, options) => {
  const finalOptions = { ...options, ...DEFAULT_OPTION, method: 'GET' };

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const del = async (url, options) => {
  const finalOptions = { ...options, ...DEFAULT_OPTION, method: 'DELETE' };
  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};
