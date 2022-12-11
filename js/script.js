let weatherData, userInput;

const $city = $('#city');
const $temp = $('#temp');
const $feelsLike = $('#feels-like');
const $weather = $('#weather');
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
       // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
      // getting the user input
    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&APPID=a0275108baeea3c2aa6fd564bcc2f5df&units=Imperial'
      }).then(
        (data) => {
         weatherData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}

function render() {
    $city.text(weatherData.name);
    $temp.text(weatherData.main.temp + ' deg');
    $feelsLike.text(weatherData.main.feels_like + ' deg');
    $weather.text(weatherData.weather[0].description);
 }