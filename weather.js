// const apiKey = process.env.API_KEY;

class Weather {
  constructor(city) {
    this.apiKey = '3ad9369f5dd481e8bc0a070cb5745947';
    this.city = city;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  }

  //change location
  changeLocation(city) {
    this.city = city;
  }
}
