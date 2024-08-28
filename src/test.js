const dayjs = require('dayjs');

console.log(dayjs('2024-07-13').daysInMonth());
console.log(dayjs('2024-07-13').startOf('month').format('YYYY-MM-DD'));
console.log(dayjs('2024-07-13').endOf('month').format('YYYY-MM-DD'));