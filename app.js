// Init Storage object
const storage = new Storage();

// Get save location data
const weatherLocation = storage.getLocationData();
// Init Weather Object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  // Change location
  weather.changeLocation(city);
  // Set location in local storage
  storage.setLocationData(city);
  // Get and display weather
  getWeather();
  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
