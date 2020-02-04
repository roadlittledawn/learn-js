function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return `${year}-${monthNames[monthIndex]}-${day} ${minutes}:${seconds}`;
}

// console.log(formatDate(new Date()));

function displayDateTime(datestamp, options) {
  return new Intl.DateTimeFormat('en-US', options).format(datestamp)
}

var timeOptions = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: 'America/Los_Angeles' 
};
console.log( displayDateTime( Date.now(), timeOptions ) )
