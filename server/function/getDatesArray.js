const moment = require('moment');

const getDateArray = (startDate, endDate, step = 1) => {
  const current = moment(startDate, 'MM-DD-YYYY');
  const dates = [];

  while (current.isBefore(moment(endDate, 'MM-DD-YYYY'))) {
    dates.push(current.format('MM-DD-YYYY'));
    current.add(step, 'days');
  }

  return dates;
}

module.exports = getDateArray