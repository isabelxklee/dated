import Dated from '../Dated/index.ts';

export function updateTime(date: Dated, time: string): Dated {
  date.time = time;
  return date;
}
