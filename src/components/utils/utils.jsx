import { DateTime } from 'luxon';
const convertDate = (date) => {
  return DateTime.fromISO(date).toFormat('yyyy LLL dd');
};
export { convertDate };
