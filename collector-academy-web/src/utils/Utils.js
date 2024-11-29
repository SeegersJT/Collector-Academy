/* eslint-disable max-len */
export class Utils {
  /**
   * Check if a value is undefined.
   * @param {any} value - The value to check.
   * @returns {boolean} True if the value is undefined, otherwise false.
   */
  static isUndefined = (value) => typeof value === 'undefined';

  /**
   * Check if a value is null.
   * @param {any} value - The value to check.
   * @returns {boolean} True if the value is null, otherwise false.
   */
  static isNull = (value) => value === null;

  /**
   * Check if an array is empty.
   * @param {Array} arr - The array to check.
   * @returns {boolean} True if the array is empty, otherwise false.
   */
  static isEmpty = (arr) => !this.isNull(arr) && arr.length === 0;

  /**
   * Generate a random number between a specified range (inclusive).
   * Uses the crypto API for secure random number generation.
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} A random number between min and max (inclusive).
   */
  static getRandomNumber = (min, max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    const crypto = window.crypto.getRandomValues(new Uint32Array(1))[0];

    return Math.floor((crypto / (0xffffffff + 1)) * (maxValue - minValue + 1)) + minValue;
  };

  /**
   * Generate a random ID of the specified length in hexadecimal format.
   * @param {number} [length=16] - The length of the random ID to generate.
   * @returns {string} A random ID string of the specified length.
   */
  static generateRandomID = (length = 16) => {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);

    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
  };

  /**
   * Generate a random UUID v4 (Universally Unique Identifier).
   * This UUID follows the RFC 4122 version 4 format.
   * @returns {string} A randomly generated UUID v4.
   */
  static generateUUID() {
    const randomValues = window.crypto.getRandomValues(new Uint8Array(16));

    // eslint-disable-next-line no-bitwise
    randomValues[6] = (randomValues[6] & 0x0f) | 0x40;
    // eslint-disable-next-line no-bitwise
    randomValues[8] = (randomValues[8] & 0x3f) | 0x80;

    const hex = [...randomValues].map((byte) => byte.toString(16).padStart(2, '0')).join('');

    return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20, 32)}`;
  }

  /**
   * Generate a random number between a specified range (inclusive).
   * Uses the crypto API for secure random number generation.
   * @param {string} baseClassName - The base class name.
   * @param {string} modifiers - The modifiers that will be attached onto the base class name.
   * @returns {string} - A combination of the base class name and the modifiers attached to the base class name.
   */
  static getClassNames(baseClassName, modifiers = {}) {
    const classes = [baseClassName];

    Object.entries(modifiers).forEach(([name, active]) => {
      if (!active) return;

      classes.push(`${baseClassName}--${name}`);
    });

    return classes.join(' ');
  }

  /**
   * Start a countdown timer that updates the time left in real-time.
   * @param {string} targetDate - The target date in ISO 8601 format (e.g., '2024-11-21T12:34:13.719+02:00').
   * @param {function} callback - The callback function to update the UI with the remaining time.
   */
  static startCountdown(targetDate, callback) {
    const target = new Date(targetDate);

    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = target - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
        callback('Expired');
        return;
      }

      const secondsLeft = Math.floor(timeDiff / 1000);
      const minutesLeft = Math.floor(secondsLeft / 60);
      const hoursLeft = Math.floor(minutesLeft / 60);

      const remainingSeconds = secondsLeft % 60;
      const remainingMinutes = minutesLeft % 60;

      let timeLeft;
      if (hoursLeft > 0) {
        timeLeft = `${String(hoursLeft).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      } else if (minutesLeft > 0) {
        timeLeft = `${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      } else {
        timeLeft = `${String(remainingSeconds).padStart(2, '0')}`;
      }

      callback(timeLeft);
    }, 1000);
  }

  /**
   * Check if a value is a numeric string.
   * @param {string} value - The value to check.
   * @returns {boolean} - Returns true if the value is numeric, otherwise false.
   */
  static isNumeric(value) {
    return /^\d+$/.test(value); // Regular expression to match only digits (0-9)
  }

  static noOp() {}
}
