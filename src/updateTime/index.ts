import Dated from '../Dated.ts';

export function updateTime(date: Dated, time: string): Dated {
  date.time = time;
  return date;
}
