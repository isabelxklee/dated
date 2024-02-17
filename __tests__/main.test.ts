import Dated from '../src/Dated/index.ts';
import { updateTime } from '../src/updateTime/index.ts';

jest.autoMockOff();

test('should initialize date', () => {
  const date = new Dated();
  expect(date.createdDate).not.toBeNull();
  console.log(date);
});

test('should update time for existing date', () => {
  const date = new Dated();
  updateTime(date, '12:09:00');
  expect(date.time).toBe('12:09:00');
  console.log(date);
});

// test('should create custom date', () => {
//   const date = new Dated({
//     time: '01:45:00',
//     day: 31,
//     month: 2,
//     year: 2024,
//     weekdayFormat: 'medium',
//     monthFormat: 'long',
//   });
//   expect(date.weekdayFormat).not.toBe('short');
//   console.log(date);
// });

// test('should update time', () => {
//   const date = new Dated();
//   date.setTime('15:23:00');
//   expect(date.time).toBe('15:23:00');
//   console.log(date);
// });
