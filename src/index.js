const test = document.querySelector('.test')
const press = document.querySelector('.press')
const image = document.querySelector('.image')

async function testing() {
    try {
        const location = document.querySelector('.location');
        const temperature = document.querySelector('.temperature');
        const condition = document.querySelector('.condition');
        const windSpeed = document.querySelector('.wind_speed');
        const humidity = document.querySelector('.humidity')

        const value = test.value
        const API = await fetch(`https://api.weatherapi.com/v1/current.json?key=95435ac00eca4f8d88a162138230108&q=${value}`);
        const realAPI = await API.json();
        const bla = realAPI
        image.src = realAPI.current.condition.icon
        console.log(bla)

        location.innerHTML = realAPI.location.name;
        temperature.innerHTML =`Temperature: ${realAPI.current.temp_c}°C`;
        condition.innerHTML = `Conditions: ${realAPI.current.condition.text}`;
        windSpeed.innerHTML = `Wind Speed: ${realAPI.current.wind_kph} km/h`;
        humidity.innerHTML = `Humidity: ${realAPI.current.humidity}`;
    }
    catch {
        console.log("City not found")
    }
}

press.addEventListener('click', () => testing());