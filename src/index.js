const city = document.querySelector('.city');
const country = document.querySelector('.country')
const press = document.querySelector('.press')
const image = document.querySelector('.image')
const card = document.querySelector('.weather_info_card')
const humidity = document.querySelector('.humidity')

async function testing() {
    card.style.display = 'flex'
    const location = document.querySelector('.location');
    const temperature = document.querySelector('.temperature');
    const condition = document.querySelector('.condition');
    const windSpeed = document.querySelector('.wind_speed');    
    

    try {

        const cityName = city.value
        const countryName = country.value
        

        if (countryName !== '') {
            API = await fetch(`https://api.weatherapi.com/v1/current.json?key=95435ac00eca4f8d88a162138230108&q=${cityName},${countryName}`);

            const realAPI = await API.json();
            const bla = realAPI
            image.src = realAPI.current.condition.icon
            console.log(bla)

            location.innerHTML = realAPI.location.name;
            temperature.innerHTML = `Temperature: ${realAPI.current.temp_c}°C`;
            condition.innerHTML = `Conditions: ${realAPI.current.condition.text}`;
            windSpeed.innerHTML = `Wind Speed: ${realAPI.current.wind_kph} km/h`;
            humidity.innerHTML = `Humidity: ${realAPI.current.humidity}`;
        }
        else {
            API = await fetch(`https://api.weatherapi.com/v1/current.json?key=95435ac00eca4f8d88a162138230108&q=${cityName}`);

            const realAPI = await API.json();
            image.src = realAPI.current.condition.icon

            location.innerHTML = realAPI.location.name;
            temperature.innerHTML = `Temperature: ${realAPI.current.temp_c}°C`;
            condition.innerHTML = `Conditions: ${realAPI.current.condition.text}`;
            windSpeed.innerHTML = `Wind Speed: ${realAPI.current.wind_kph} km/h`;
            humidity.innerHTML = `Humidity: ${realAPI.current.humidity}`;
        }

    }
    catch {
        location.innerHTML = "City not found";
        temperature.innerHTML = 'Please enter a different city and country';
        condition.innerHTML = '';
        windSpeed.innerHTML = '';
        humidity.innerHTML = '';
        image.src = '../src/Profile1.jpg'
    }
}

press.addEventListener('click', () => testing());