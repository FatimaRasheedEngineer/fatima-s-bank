
const dateElement = document.getElementById('date');

function updateDate() {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  dateElement.innerText = dateString;
}

updateDate();
setInterval(updateDate, 1000); // update every 1 second

