import { DateClassOptions, Time, Weekday } from './types.js';

let counter = 0;
const today = new Date();

export default class DateClass {
  id: number;
  createdDate: Date;
  time: Time;
  day: number;
  month: number;
  year: number;
  weekday: Weekday;

  constructor(options: DateClassOptions = {}) {
    this.id = counter++;
    this.createdDate = today;
    this.time = options.time ?? null;
    this.day = today.getDate();
    this.month = options.month ?? today.getMonth() + 1;
    this.year = options.year ?? today.getFullYear();
    this.weekday = options.weekday ?? null;
  }
}
