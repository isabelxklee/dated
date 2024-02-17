import { DateClassOptions, MonthFormat, WeekdayFormat } from './types.js';

let counter = 0;
const today = new Date();
const defaultTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
// const formatWeekday = null;

export default class DateClass {
  id: number;
  createdDate: Date;
  time: string;
  day: number;
  month: number;
  year: number;
  weekday: number;
  weekdayFormat: WeekdayFormat;
  monthFormat: MonthFormat;

  // methods
  setTime(newTime: string): void {
    this.time = newTime;
  }

  // setDay!: (newDay: number) => void;
  // setMonth!: (newMonth: number) => void;
  // setYear!: (newYear: number) => void;
  // setWeekdayFormat!: (newFormat: WeekdayFormat) => void;
  // setMonthFormat!: (newFormat: MonthFormat) => void;

  // initialize options
  constructor(options: DateClassOptions = {}) {
    this.id = counter++;
    this.createdDate = today;
    this.time = options.time ?? defaultTime;
    this.day = options.day ?? today.getDate();
    this.month = options.month ?? today.getMonth() + 1;
    this.year = options.year ?? today.getFullYear();
    this.weekday = today.getDay() + 1;
    this.weekdayFormat = options.weekdayFormat ?? 'short';
    this.monthFormat = options.monthFormat ?? 'numerical';
  }
}
