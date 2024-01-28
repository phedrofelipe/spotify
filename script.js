const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    // const url = `http://localhost:3000/artists?name_like=${searchTerm}` 
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((result) => displayResults(result));
} 

function displayResults(result) {
    hidePlaylists();
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultsArtists.classList.remove('hidden');
}

function hidePlaylists() {
    resultPlaylist.classList.add('hidden');
}

document.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultsArtists.classList.add('hidden');
        return;
    }
    requestApi(searchTerm);
});