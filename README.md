# SPOTIMY
This is my simplified version of Spotify. 
This project utilizes the [Spotify Scraper API](https://rapidapi.com/DataFanatic/api/spotify-scraper/) from Rapid API to fetch data about songs on Spotify/Youtube, 
including audio, title, song cover and duration. The Spotify Scraper API offers an easy-to-use json response to access this information.<br>

## Getting Started
1. Create a RAPID API Account
2. Subscribe to Test:
> ![api_screen](https://github.com/AnouarElKihal/spotimy/assets/68613907/a9f0dae7-f678-43c6-aa76-dc5366a908eb)
3. Replace YOUR_SPOTIFY_SCRAPER_API_KEY in the javascript file:
```javascript
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_SPOTIFY_SCRAPER_API_KEY',
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
}
```

## Live Application
You can find it online at this url: [spotimy.eabug.repl.co](https://spotimy.eabug.repl.co)
> ![spotimyScreen](https://github.com/AnouarElKihal/spotimy/assets/68613907/fc11ebb1-5adb-46f1-ba43-34da58fc7609)

