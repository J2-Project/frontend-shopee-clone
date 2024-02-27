const DEFAULT_OPTION = {
  headers: {
    Accept: 'application/json'
  }
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

  const finalOptions = {
    ...options,
    ...DEFAULT_OPTION,
    method: 'POST',
    body: JSON.stringify(data)
  };

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const put = async (url, data, options) => {
  if (localStorage.getItem('token')) {
    DEFAULT_OPTION.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  const finalOptions = {
    ...options,
    ...DEFAULT_OPTION,
    method: 'PUT',
    body: JSON.stringify(data)
  };

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const patch = async (url, data, options) => {
  if (localStorage.getItem('token')) {
    DEFAULT_OPTION.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  const finalOptions = {
    ...options,
    ...DEFAULT_OPTION,
    method: 'PATCH',
    body: JSON.stringify(data)
  };

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const postFile = async (url, data, options) => {
  if (localStorage.getItem('token')) {
    DEFAULT_OPTION.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  const finalOptions = {
    ...options,
    ...DEFAULT_OPTION,
    method: 'POST',
    body: data
  };

  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};

export const del = async (url, options) => {
  const finalOptions = { ...options, ...DEFAULT_OPTION, method: 'DELETE' };
  return await fetch(url, finalOptions).then(checkStatus).then(parseJSON);
};
