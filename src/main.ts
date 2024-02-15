import {
  DateClassOptions,
  MonthFormat,
  Weekday,
  WeekdayFormat,
} from './types.js';

let counter = 0;
const today = new Date();
const defaultTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

export default class DateClass {
  id: number;
  createdDate: Date;
  time: string;
  day: number;
  month: number;
  year: number;
  weekday: Weekday;
  weekdayFormat: WeekdayFormat;
  monthFormat: MonthFormat;

  constructor(options: DateClassOptions = {}) {
    this.id = counter++;
    this.createdDate = today;
    this.time = options.time ?? defaultTime;
    this.day = today.getDate();
    this.month = options.month ?? today.getMonth() + 1;
    this.year = options.year ?? today.getFullYear();
    this.weekday = options.weekday ?? null;
    this.weekdayFormat = options.weekdayFormat ?? 'short';
    this.monthFormat = options.monthFormat ?? 'numerical';
  }
}
