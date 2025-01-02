import { CalculationsOperators } from './constants/Calculations.enum';
import { DateUnit } from './constants/Datetime.enum';

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
  static generateRandomNumber = (min, max) => {
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
    return /^\d+$/.test(value);
  }

  static noOp() {}

  /**
   * Capitalize the first character of a string.
   * @param {string} value - The string to capitalize.
   * @returns {string} - Returns the string with the first character capitalized.
   */
  static capitalizeFirstCharacter(value) {
    if (typeof value !== 'string' || value.length === 0) {
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  /**
   * Format a value as a valid number with thousands separated by spaces.
   * @param {number|string} value - The input value to format.
   * @returns {string} - Returns the formatted number as a string, or an empty string if the value is invalid.
   */
  static formatNumber(value) {
    const number = parseFloat(value);

    if (isNaN(number)) {
      return '';
    }

    return number.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, ' ');
  }

  /**
   * Compare a datetime with the current datetime based on a specific unit, operator, and value.
   * @param {Date|string} inputDatetime - The input datetime to compare.
   * @param {string} unit - The unit of time to compare (YEAR, MONTH, WEEK, etc.).
   * @param {string} operator - The comparison operator (=, <>, >, <, >=, <=).
   * @param {number} value - The value to compare against in the specified unit.
   * @returns {boolean} - Returns true if the condition is met; otherwise false.
   */
  static compareDate(inputDatetime, unit, operator, value) {
    if (!(unit in DateUnit)) {
      throw new Error(`Invalid unit provided: ${unit}`);
    }

    if (!Object.values(CalculationsOperators).includes(operator)) {
      throw new Error(`Invalid operator provided: ${operator}`);
    }

    const inputDate = new Date(inputDatetime);
    if (isNaN(inputDate)) {
      throw new Error('Invalid inputDatetime provided');
    }

    const now = new Date();
    let targetDate = new Date(now);

    switch (unit) {
      case DateUnit.YEAR:
        targetDate.setFullYear(now.getFullYear() - value);
        break;
      case DateUnit.MONTH:
        targetDate.setMonth(now.getMonth() - value);
        break;
      case DateUnit.WEEK:
        targetDate.setDate(now.getDate() - value * 7);
        break;
      case DateUnit.DAY:
        targetDate.setDate(now.getDate() - value);
        break;
      case DateUnit.HOUR:
        targetDate.setHours(now.getHours() - value);
        break;
      case DateUnit.MINUTE:
        targetDate.setMinutes(now.getMinutes() - value);
        break;
      case DateUnit.SECOND:
        targetDate.setSeconds(now.getSeconds() - value);
        break;
      case DateUnit.MILLISECOND:
        targetDate.setMilliseconds(now.getMilliseconds() - value);
        break;
      default:
        throw new Error(`Unsupported unit: ${unit}`);
    }

    switch (operator) {
      case CalculationsOperators.EQUALS:
        return inputDate.getTime() === targetDate.getTime();
      case CalculationsOperators.NOT_EQUALS:
        return inputDate.getTime() !== targetDate.getTime();
      case CalculationsOperators.MORE_THAN:
        return inputDate.getTime() > targetDate.getTime();
      case CalculationsOperators.LESS_THAN:
        return inputDate.getTime() < targetDate.getTime();
      case CalculationsOperators.MORE_THAN_EQUALS:
        return inputDate.getTime() >= targetDate.getTime();
      case CalculationsOperators.LESS_THAN_EQUALS:
        return inputDate.getTime() <= targetDate.getTime();
      default:
        throw new Error(`Unsupported operator: ${operator}`);
    }
  }
}
