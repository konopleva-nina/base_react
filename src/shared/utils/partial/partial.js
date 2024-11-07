/**
 * @function partial
 * @param {*} func
 * @param {*} args
 * @return {*}
 */

export const partial = (func, ...args) => func.bind(null, ...args);

//bind, call, aply конспект
