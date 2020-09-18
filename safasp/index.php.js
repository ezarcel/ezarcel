console.log('index.php.js')
window.addEventListener('DOMContentLoaded', () => {
	const photoAlbums = document.querySelector('main > div:nth-child(3) > div:nth-child(6)')
	const photoAlbumsLink = photoAlbums.querySelector('.links a')
	photoAlbums.querySelector('.titol i').classList.replace('fa-list', 'fa-images')
	photoAlbumsLink.href = '/students/albums_fotos.php'
	photoAlbumsLink.innerText = 'Àlbums de fotografies'
})