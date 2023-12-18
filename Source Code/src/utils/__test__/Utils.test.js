import { getFakerNumbers, getDailyDate } from "../Utils";

test("getLastMonthDailyDate returns an array of 30 date strings", () => {
  const dates = getDailyDate(30);
  expect(dates).toHaveLength(30);
  dates.forEach((date) => {
    expect(date).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });
});

test("getFakerNumbers returns an array of 30 integers between 0 and 200", () => {
  const numbers = getFakerNumbers(30, 0, 200);
  expect(numbers).toHaveLength(30);
  numbers.forEach((number) => {
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(200);
  });
});
