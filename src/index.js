const test = document.querySelector('.test')
const press = document.querySelector('.press')
const image = document.querySelector('.image')

async function testing() {
    try {
        const value = test.value
        const API = await fetch(`https://api.weatherapi.com/v1/current.json?key=95435ac00eca4f8d88a162138230108&q=${value}`);
        const realAPI = await API.json();
        const bla = realAPI.current
        image.src = realAPI.current.condition.icon
        console.log(bla)
    }
    catch {
        console.log("City not found")
    }
}

press.addEventListener('click', () => testing());