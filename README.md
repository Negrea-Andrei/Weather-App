# Weather-App

## Overview

This web application fetches real-time weather information based on user input for city and country. It utilizes the WeatherAPI to gather data and presents it in a user-friendly card format.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Features

- **Dynamic Display**: The application dynamically displays weather information, including temperature, conditions, wind speed, and humidity.
- **Flexibility**: Users can input both city and country for more accurate results.
- **Error Handling**: In case of invalid input or an issue with the API, the application gracefully handles errors and provides a user-friendly message.

## Getting Started

### Prerequisites

- Make sure you have a modern web browser installed.
- Ensure a stable internet connection to fetch real-time weather data.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Open the project directory:

   ```bash
   cd your-repo
   ```

3. Open the `index.html` file in your preferred web browser or deploy the application on a web server for production use.

## Usage

1. Open the application in your web browser.
2. Input the desired city and, optionally, the country in the provided fields.
3. Click the "Get Weather" button to fetch and display real-time weather information.
4. Explore the presented data, including temperature, conditions, wind speed, and humidity.

## API Key

This application uses the WeatherAPI. Ensure that you have a valid API key and replace it in the fetch URL in the `testing` function in `script.js`.

```javascript
const API = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${cityName},${countryName}`);
```

## Error Handling

If there are any issues with the input or the API request, the application will display a user-friendly error message.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
