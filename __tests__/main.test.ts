import DateClass from '../src/main.ts';

jest.autoMockOff();

test('should initialize date', () => {
  const date = new DateClass();
  expect(date.createdDate).not.toBeNull();
  console.log(date);
});
