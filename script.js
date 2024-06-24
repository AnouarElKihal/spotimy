// SPOTIFY SCRAPER API ==> https://rapidapi.com/DataFanatic/api/spotify-scraper/

const music = document.getElementById("music")
const userInput = document.getElementById("inputText")
const searchBtn = document.getElementById("searchBtn")
const pauseandstartBtn = document.getElementById("pauseandstartBtn")
const avantiBtn = document.getElementById("avantiBtn")
const indietroBtn = document.getElementById("indietroBtn")
const faIcons = document.getElementById("faIcon")
const musicDuration = document.getElementById("musicDuration")
const songName = document.getElementById("songName")
const songCover = document.getElementById("songCover")
const timing = document.getElementById("timing")
const openSong = document.getElementById("openSong")

let spotifyLink = ""

async function fetchData(URL) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '524bd23822msha64da3493635e1dp124219jsn6e6fb6b6f4dd', // Replace with 'YOUR_SPOTIFY_SCRAPER_API_KEY'
            'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
        }
    };
    try {
        fetch(URL, options)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let title = json.youtubeVideo.title // titolo
            let duration = json.spotifyTrack.durationText // durata
            let cover = json.spotifyTrack.album.cover[0].url // copertina
            let audioUrl = json.youtubeVideo.audio[0].url // audio
            spotifyLink = json.spotifyTrack.shareUrl
            music.src = audioUrl
            songName.innerText = title
            songCover.src = cover
            musicDuration.innerText = duration
            music.play()
            music.volume = 0.7
            faIcons.classList = "fa-solid fa-pause"
            let seconds = 0
        })
    } catch (error) {
        alert("I'm sorry but this song is not currently available")
        console.error(error);
    }
}

const getUrl = (inputText) => {
    let newInputText = inputText.replace(/\s/g, "%20")
    return `https://spotify-scraper.p.rapidapi.com/v1/track/download?track=${newInputText}`
}

let url = ""
searchBtn.onclick = () => {
    console.log(userInput.value)
    url = getUrl(userInput.value)
    fetchData(url)
    userInput.value = ""
}

let counter = 2
pauseandstartBtn.onclick = () => {
    counter++
    if (counter % 2 == 0) {
        music.play()
        music.volume = 0.1
        faIcons.classList = "fa-solid fa-pause"
    }
    else {
        music.pause()
        faIcons.classList = "fa-solid fa-play"
    }
}

music.addEventListener("ended", function() {
    music.currentTime = 0
    music.play()
})

avantiBtn.onclick = () => {
    music.currentTime += 10
}

indietroBtn.onclick = () => {
    music.currentTime -= 10
}

openSong.onclick = () => {
    openSong.href = spotifyLink
}

