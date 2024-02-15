import DateClass from './main.ts';

jest.autoMockOff();

test('should initialize date', () => {
  const date = new DateClass();
  console.log(date);
});
