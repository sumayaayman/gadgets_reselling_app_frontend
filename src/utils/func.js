import moment from 'moment';

export const formatDate = (date) => {
const formattedDate = moment(date).format("DD MMM YY");
return formattedDate;
}
