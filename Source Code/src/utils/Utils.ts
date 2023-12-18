import { faker } from "@faker-js/faker";

/**
 *
 * This function takes a count as a number and returns an array of
 * past days dates in this format  (mm/dd/yyyy)
 * @function getDailyDate
 * @param {string} count
 * @returns {string[]}
 */

export function getDailyDate(count: number): string[] {
  const today = new Date();
  const lastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate()
  );
  const dates = [];
  for (let i = 0; i < count; i++) {
    const date = new Date(lastMonth);
    date.setDate(date.getDate() + i);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    dates.push(`${mm}/${dd}/${yyyy}`);
  }
  return dates;
}

/**
 *
 * This function takes a count as a number and generates an array of random numbers
 * between min and max with the length of that count.
 * @function getDailyDate
 * @param {string} count
 * @param {number} min
 * @param {number} max
 * @return {number[]}
 */
export function getFakerNumbers(
  count: number,
  min: number,
  max: number
): number[] {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    const number = faker.number.int({ min, max });
    numbers.push(number);
  }
  return numbers;
}
