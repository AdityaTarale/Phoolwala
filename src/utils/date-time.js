import { format, formatDistance, formatISO } from 'date-fns';

export const formatDate = (date, formatStr = 'dd-LLL-yyyy') =>
  date ? format(date, formatStr) : date;

export const formatDateTime = (date, formatStr = 'dd-LLL-yyy HH:mm') =>
  date ? format(date, formatStr) : date;

export const formatDateDistance = date =>
  date ? formatDistance(date, new Date(), { addSuffix: true, includeSeconds: false }) : date;

/*
TODO date - fns utc for api
*/

// export const formatDateTimeUTCForAPI = (
//   date,
//   formatStr = "yyyy-MM-dd kk:mm:ss xxx"
// ) => (date ? format(date, formatStr, {timeZone: "UTC"}) : date);

// write function using date-fns utc for api
export const formatDateTimeUTCForAPI = (date, formatStr = 'yyyy-MM-dd kk:mm:ss xxx') =>
  date ? formatISO(date, formatStr) : date;
