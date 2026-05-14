# Weather App

A simple weather forecast web app built with vanilla JavaScript. Search any city to get a 3-day weather forecast with temperature, humidity, and rain data.

## Features

- 3-day weather forecast by city name
- Temperature unit toggle (°F / °C)
- Displays humidity and rain probability
- Weather condition icons and description

## Tech Stack

- Vanilla JavaScript (modular)
- HTML / CSS
- Webpack (bundler)
- Weather API (via `apiLogic.js`)

## Project Structure

```
Weather-App/
├── src/
│   ├── icons/
│   ├── address.js        # Handles address/city input
│   ├── apiLogic.js       # API calls and data fetching
│   ├── conversion.js     # Unit conversion (F <-> C)
│   ├── displayData.js    # Renders forecast cards to DOM
│   ├── index.js          # Entry point
│   ├── requiredData.js   # Data extraction from API response
│   ├── searchDOM.js      # Search bar DOM logic
│   ├── style.css
│   └── template.html
├── .gitignore
├── package.json
├── package-lock.json
└── webpack.config.js
```

## Getting Started

**Prerequisites:** Node.js installed

```bash
# Clone the repo
git clone https://github.com/Shubham277353/Weather-App.git
cd Weather-App

# Install dependencies
npm install

# Add your API key
# Open src/apiLogic.js and replace the placeholder with your actual key

# Start development server
npm start
```

## API Key Setup

This app uses a weather API (e.g. WeatherAPI / OpenWeatherMap). You'll need a free API key:

1. Sign up at your weather API provider
2. Copy your key into `src/apiLogic.js`

> ⚠️ Never commit your API key to GitHub. Make sure it's excluded via `.gitignore` or use environment variables.

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.
