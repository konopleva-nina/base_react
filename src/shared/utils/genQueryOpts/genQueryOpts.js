/**
 * @typedef {import('./types').Method} Method
 * @typedef {import('./types').Body} Body
 */

/**
 * @function genQueryOpts
 * @param {Method} method
 * @param {Body | null} body
 * @returns {RequestInit}
 */

export const genQueryOpts = (method, body = null) => {
  const queryOpts = {
    method,
    headers: { 'Content-type': 'application/json' },
  };

  if (body) {
    queryOpts.body = JSON.stringify(body);
  };

  return queryOpts;
};
