// write your code here

// deliverable 1

// load up the dom
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
})
// fetch ramen data
const baseURL = 'http://localhost:3000/ramens'
fetch(baseURL)
  .then(response => response.json())
  .then(data => data.forEach(ramenObject => {
    // console.log(ramenObject.image)

    // create img tag
    const img = document.createElement('img')
    img.src = ramenObject.image
    // console.log(img)

    // display imgs to dom -> append imgs to div
    const ramenMenu = document.querySelector('#ramen-menu')
    ramenMenu.append(img)


    // deliverable 2

    // event listener on click for images 
    img.addEventListener('click', () => {

        // display ramen info in #ramen-detail div -> .detail-image src & alt,
        // .name, .restaurant, #rating-display, #comment-display
        const detailImage = document.querySelector('.detail-image')
        detailImage.src = ramenObject.image
        detailImage.alt = ramenObject.name

        const name = document.querySelector('.name')
        name.innerText = ramenObject.name

        const restaurant = document.querySelector('.restaurant')
        restaurant.innerText = ramenObject.restaurant

        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.innerText = ramenObject.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.innerText = ramenObject.comment
    })
  }))




// deliverable 3

// add event listener to #new-ramen form
const newRamenForm = document.getElementById('new-ramen')
newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault() // stop the page from refreshing on form submit
   
    // create new ramen object
    const newRamenObject = {}
    newRamenObject.name = document.querySelector('#new-name').value
    newRamenObject.restaurant = document.querySelector('#new-restaurant').value
    newRamenObject.image = document.querySelector('#new-image').value
    newRamenObject.rating = document.querySelector('#new-rating').value
    newRamenObject.comment = document.querySelector('#new-comment').value
    console.log(newRamenObject)

    // display new ramen in #ramen-menu (append?)
    const ramenMenu = document.querySelector('#ramen-menu')
    const newRamenItem = document.createElement('img')
    newRamenItem.src = newRamenObject.image
    ramenMenu.append(newRamenItem)
})