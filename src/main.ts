import { DateClassOptions, Month, Time, Weekday } from './types.js';

let counter = 0;

export default class DateClass {
  id: number;
  createdDate: Date;
  time: Time;
  day: number;
  month: Month;
  year: number;
  weekday: Weekday;

  constructor(options: DateClassOptions = {}) {
    this.id = counter++;
    this.createdDate = new Date();
    this.time = options.time ?? null;
    this.day = null;
    this.month = options.month ?? null;
    this.year = null;
    this.weekday: options.weekday ?? null;
  }
}
