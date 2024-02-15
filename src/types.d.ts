export interface DateClassOptions {
  time?: string;
  weekday?: Weekday;
  month?: number;
  year?: number;
  weekdayFormat?: WeekdayFormat;
  monthFormat?: MonthFormat;
}

export interface Time {
  hour: number;
  minute: number;
  format: '12hr' | '24hr';
  timezone?: string;
}

export type WeekdayFormat = 'short' | 'medium' | 'long';
export type MonthFormat = 'numerical' | 'short' | 'medium' | 'long';

export interface Weekday {
  short: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
  medium: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  long: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
}

export interface Month {
  numerical: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  short: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  medium: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  long: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
