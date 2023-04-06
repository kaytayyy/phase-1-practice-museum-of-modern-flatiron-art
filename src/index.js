console.log('Write your code here');
const baseUrl = 'http://localhost:3000/'
const exhibitUrl = baseUrl + 'current-exhibits'

const fetchArt = () =>
fetch(exhibitUrl)
.then(response = response.json())
.then(artData => renderArt(artData))

fetchArt()

const renderArt = art => {
    renderArtDetails(art[0])
    const artTitleH2 = document.getElementById('exhibit-title')

    const artTicketsBought = document.getElementById('tickets-bought')

    const artExhibitDescription = document.getElementById('exhibit-description')

    const artComments = document.getElementById('comments-section')

}