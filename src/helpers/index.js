import moment from 'moment';

export default function formatDateToString(date) {
  return moment(date).format('DD/MM/YYYY');
}
