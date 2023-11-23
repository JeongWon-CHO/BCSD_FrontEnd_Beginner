function fetchMovies() {
    axios
        .get('https://api.thecatapi.com/v1/images/search?size=full')
        .then(res => {
        console.log(res)
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = res.data.Search[0].Title
        imgEl.src = res.data.Search[0].Poster
    })
}

fetchMovies()