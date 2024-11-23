/**
 * @function getRandomInt
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

export const getRandomInt = (/**@type {Number}*/ min, /**@type {Number}*/ max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

/**
 * @function getRandomColor
 * @returns {string}
 */

export const getRandomColor = () => (
  `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
);

// const getRandomColor2 = () => {
//   const letters = '0123456789ABCDEF';
//   let hexColor = '#';
//   for (let indexHEX = 0; indexHEX < 6; indexHEX++) {
//     hexColor += letters[(Math.floor(Math.random() * 16))];
//   };
//   return hexColor;
// };
