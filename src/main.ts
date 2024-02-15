import { Time, Weekday } from './types.js';

export default class Date {
  id: string;
  time: Time;
  day: number;
  month: number;
  year: number;
  weekday: Weekday;
}
