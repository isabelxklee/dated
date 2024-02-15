export interface Time {
  hour: number;
  minute: number;
  format: '12hr' | '24hr';
  timezone?: string;
}

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
