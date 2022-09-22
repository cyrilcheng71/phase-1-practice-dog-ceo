console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
    loadImages()
    loadBreeds()
  })

const loadImages = () => {
    const imgURL = 'https://dog.ceo/api/breeds/image/random/4'
    fetch(imgURL)
    .then(resp => resp.json())
    .then(images => images.message.forEach(image => displayImages(image)))
}

const loadBreeds = () => {
    const breedsURL = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedsURL)
    .then(resp => resp.json())
    .then(breeds => Object.keys(breeds.message).forEach(breed => displayBreed(breed)))
}

const displayBreed = (breed) => {
    const breedUL = document.querySelector('#dog-breeds')
    const breedLI = document.createElement('li')
    breedLI.innerText = breed
    breedUL.appendChild(breedLI)
}

const displayImages = (image) => {
    const imageContainer = document.querySelector('#dog-image-container')
    const imageEl = document.createElement('img')
    imageEl.src = image
    imageContainer.appendChild(imageEl)
}
  
  